import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FileList from "./FileList";
import FileContainer from "./FileContainer";
import { useDispatch } from "react-redux";
import { setBoolean } from "../Slices/Bool/boolSlice";
import db from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { setFolder } from "../Slices/channel/channelSlice";

function Drive() {
  const dispatch = useDispatch();
  const [folders, setFolders] = useState([]);
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    dispatch(setFolder({ folderId: null, folderName: null }));
  }, [dispatch]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "folder"), orderBy("timestamp", "asc")),
      (snapshot) => setFolders(snapshot.docs)
    );
  }, []);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "post"), orderBy("timestamp", "asc")),
      (snapshot) => setFileData(snapshot.docs)
    );
  }, []);

  return (
    <Container onClick={() => dispatch(setBoolean({ modelBools: false }))}>
      <Title>
        <span>My Drive</span>
        <ArrowDropDownIcon />
      </Title>
      <FileContent>
        <SemiTitle>Suggested</SemiTitle>

        <GridContainer>
          {fileData?.map((data) => {
            return (
              <FileList
                img={data?.data().Image}
                key={data?.id}
                id={data?.id}
                title={data?.data().photoTitle}
                uid={data?.data().uid}
              />
            );
          })}
        </GridContainer>
        <Margin>
          <SemiTitle>Folders</SemiTitle>

          <GridContainer>
            {folders?.map((data) => (
              <FileContainer
                key={data.id}
                id={data.id}
                title={data?.data().name}
              />
            ))}
          </GridContainer>
        </Margin>
      </FileContent>
    </Container>
  );
}

export default Drive;

const Container = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 13px;

  svg {
    margin-left: 10px;
    color: #5f6368;
  }

  span {
    font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #202124;
  }
`;

const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow-y: scroll;
  flex-grow: 1;
  max-height: 100vh;
  margin-bottom: 30px;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    transition: all 200ms ease-out;
    max-height: 100px;

    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const SemiTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: #5f6368;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`;

const Margin = styled.div``;
