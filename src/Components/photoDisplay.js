import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectPhotoDisplay,
  selectTitleDisplay,
  setPhotoDisplay,
} from "../Slices/photodisplay/photoSlice";

function PhotoDisplay() {
  const img = useSelector(selectPhotoDisplay);
  const title = useSelector(selectTitleDisplay);
  const dispatch = useDispatch();

  return (
    <Container
      show={img}
      onClick={() => dispatch(setPhotoDisplay({ photo: null }))}
    >
      <span>{title}</span>
      <PhotoDisplays>
        <img src={img} alt="" />
      </PhotoDisplays>
    </Container>
  );
}

export default PhotoDisplay;

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

  span {
    font-size: 40px;
    color: white;
    position: absolute;
    top: 0;
  }
`;

const PhotoDisplays = styled.div`
  max-width: 760px;
  max-height: 475px;
  height: 475px;
  width: 760px;
  img {
    width: 100%;
    height: 100%;
  }
`;
