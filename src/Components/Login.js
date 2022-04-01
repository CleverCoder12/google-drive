import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import { setLogIn } from "../Slices/user/userSlice";

function Login() {
  const dispatch = useDispatch();

  const LoginwithGoogle = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      let user = res.user;

      dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
    });
  };

  return (
    <Container>
      <Button onClick={LoginwithGoogle}>Sign In with Google</Button>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-weight: 600;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  transition: all 200ms ease-out;
  :hover {
    transform: scale(1.09);
  }
`;
