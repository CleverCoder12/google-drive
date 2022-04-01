import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase/firebase";
import { setBoolean } from "../Slices/Bool/boolSlice";
import { selectFolderId } from "../Slices/channel/channelSlice";
import FileList from "./FileList";

function Folder() {
  const dispatch = useDispatch();
  const folderId = useSelector(selectFolderId);
  const [filePhoto, setFilePhoto] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!folderId) {
      navigate("/");
      document.location.reload();
    }
  }, [folderId, navigate]);

  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, "folder", folderId, "folderTree"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        setFilePhoto(snapshot.docs);
      }
    );
  }, [folderId]);
  return (
    <Container onClick={() => dispatch(setBoolean({ modelBools: false }))}>
      <GridContainer>
        {filePhoto?.map((data) => (
          <FileList
            key={data?.id}
            img={data?.data().Image}
            title={data?.data().photoTitle}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

export default Folder;

const Container = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`;
