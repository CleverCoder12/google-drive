import { CameraAlt, Close } from "@mui/icons-material";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import db, { storage } from "../firebase/firebase";
import { selectPhotoBool, setBoolean } from "../Slices/Bool/boolSlice";
import { selectFolderId } from "../Slices/channel/channelSlice";
import { selectUid } from "../Slices/user/userSlice";

function PhotoModel() {
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const ImageRef = useRef(null);
  const Photo = useSelector(selectPhotoBool);
  const [loading, setLoading] = useState(false);
  const uid = useSelector(selectUid);
  const folderId = useSelector(selectFolderId);

  const dispatch = useDispatch();

  const Submit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    if (input.length < 1) return;

    if (folderId) {
      const doces = await addDoc(
        collection(db, "folder", folderId, "folderTree"),
        {
          uid: uid,
          photoTitle: input,
          timestamp: serverTimestamp(),
        }
      );

      const images = ref(storage, `folder/${folderId}/${doces.id}image`);

      await uploadString(images, selectedImage, "data_url").then(
        async (snapshot) => {
          const downloadUrl = await getDownloadURL(images);

          await updateDoc(doc(db, "folder", folderId, "folderTree", doces.id), {
            Image: downloadUrl,
          });
        }
      );
    } else {
      const docs = await addDoc(collection(db, "post"), {
        uid: uid,
        photoTitle: input,
        timestamp: serverTimestamp(),
      });

      const images = ref(storage, `post/${docs.id}/image`);

      await uploadString(images, selectedImage, "data_url").then(
        async (snapshot) => {
          const downloadUrl = await getDownloadURL(images);

          await updateDoc(doc(db, "post", docs.id), {
            Image: downloadUrl,
          });
        }
      );
    }

    setSelectedImage(null);
    setInput("");
    setLoading(false);
    dispatch(setBoolean({ photo: false }));
  };

  const SelectImages = (e) => {
    const Reader = new FileReader();

    if (e.target.files[0]) {
      Reader.readAsDataURL(e.target.files[0]);

      Reader.onload = (Event) => {
        setSelectedImage(Event.target.result);
      };
    }
  };

  return (
    <Container show={Photo}>
      <CloseIcon>
        <Close onClick={() => dispatch(setBoolean({ photo: false }))} />
      </CloseIcon>
      <Wrapper onSubmit={Submit}>
        <ImageContainer>
          {selectedImage ? (
            <img
              src={selectedImage}
              alt=""
              onClick={() => setSelectedImage(null)}
            />
          ) : (
            <CameraContainer>
              <CameraAlt onClick={() => ImageRef.current.click()} />
            </CameraContainer>
          )}
          <input type="file" hidden ref={ImageRef} onChange={SelectImages} />
        </ImageContainer>
        <TextContainer>
          <input
            type="text"
            placeholder="Enter photo Title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </TextContainer>
        <ButtonContainer>
          <button onClick={Submit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

export default PhotoModel;

const Container = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};
`;

const Wrapper = styled.form`
  height: 400px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  z-index: 999;
`;

const ImageContainer = styled.div`
  height: 50%;
  margin-bottom: 20px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  border-bottom: 1px solid black;
  margin: 0 20px;
  margin-top: 27px;
  input {
    display: flex;
    border: none;
    font-size: 18px;
    text-transform: capitalize;
    width: 100%;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  button {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 /0.05);
    background-color: #3b82f6;
    color: white;
    transition: all 200ms ease-out;

    :hover {
      transform: scale(1.001);
    }

    :active {
      transform: scale(1.009);
    }
  }
`;

const CameraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .MuiSvgIcon-root {
    width: 2.5rem !important;
    height: 2.5rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;
