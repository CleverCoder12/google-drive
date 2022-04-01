import React from "react";
import styled from "styled-components";
import SideBarList from "./SideBarList";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import { useDispatch } from "react-redux";
import { setBoolean } from "../Slices/Bool/boolSlice";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <NewChannel onClick={() => dispatch(setBoolean({ modelBools: true }))}>
          <span onClick={() => dispatch(setBoolean({ modelBools: true }))}>
            New
          </span>
        </NewChannel>
        <div>
          <SideBarList Icon={<TabletAndroidIcon />} title="My Drive" />
          <SideBarList
            Icon={
              <svg
                class=""
                viewBox="0 0 24 24"
                fill="inherit"
                focusable="false"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
              </svg>
            }
            title="Computer"
          />

          <SideBarList
            Icon={
              <svg
                class=""
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#000000"
                focusable="false"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"
                ></path>
              </svg>
            }
            title="Shared with me"
          />
          <SideBarList
            Icon={
              <svg
                class=""
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#000000"
                focusable="false"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
              </svg>
            }
            title="Recent"
          />

          <SideBarList
            Icon={
              <svg
                class=""
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                focusable="false"
                fill="#000000"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
              </svg>
            }
            title="Starred"
          />

          <SideBarList
            Icon={
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#000000"
                focusable="false"
                class=" "
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
              </svg>
            }
            title="Bin"
          />
          <UnderLine />
          <SideBarList
            Icon={
              <svg
                class="a-s-fa-Ha-pa a-ml-da-Q-c"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                focusable="false"
                fill="#6f6f6f"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path>
              </svg>
            }
            title="storage"
          />
        </div>
      </Wrapper>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewChannel = styled.div`
  width: 118px;
  height: 48px;
  background-color: white;
  border-radius: 24px;
  padding: 2px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 01);
  transition: all 200ms ease-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E");
      height: 36px;
      padding-right: 10px;
    }
  }
`;

const UnderLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
