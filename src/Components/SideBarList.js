import React from "react";
import styled from "styled-components";
function SideBarList({ title, Icon }) {
  return (
    <Container>
      {Icon} <span>{title}</span>
    </Container>
  );
}

export default SideBarList;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 200ms ease-out;

  :hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  svg {
    margin-left: 10px;
    fill: #5f6368;
    height: 24px;
  }
  span {
    margin-left: 15px;
    line-height: 26px;
    text-transform: capitalize;
    color: #5f6368;
  }
`;
