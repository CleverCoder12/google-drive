import { AddPhotoAlternate, CreateNewFolder } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectModelBool, setBoolean } from "../Slices/Bool/boolSlice";

function Model() {
  const selectModel = useSelector(selectModelBool);
  const dispatch = useDispatch();
  return (
    <Container bool={selectModel}>
      <Wrapper>
        <Header>
          <Wraps onClick={() => dispatch(setBoolean({ folderBool: true }))}>
            <CreateNewFolder />
            <span>Folder</span>
          </Wraps>
        </Header>
        <Header>
          <Wraps onClick={() => dispatch(setBoolean({ photo: true }))}>
            <AddPhotoAlternate />
            <span>Photo</span>
          </Wraps>
        </Header>
      </Wrapper>
    </Container>
  );
}

export default Model;

const Container = styled.div`
  position: fixed;
  top: 100px;
  left: 20px;
  background-color: white;
  height: 200px;
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 /0.1);
  transition: all 200ms ease-out;
  transform: ${(props) =>
    props.bool ? `translateX(-0%)` : `translateX(-200%)`};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px 0;
`;

const Wraps = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  padding-left: 20px;
  margin-top: 10px;
  transition: all 200ms ease-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  svg {
    color: rgba(0, 0, 0, 0.5);
  }

  span {
    margin-left: 10px;
  }
`;
