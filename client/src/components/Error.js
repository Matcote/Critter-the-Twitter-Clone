import React from "react";
import { FaBomb } from "react-icons/fa";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <Bomb />
      <Message>An unknown error has occured.</Message>
      <p style={{ fontSize: "large" }}>
        Please try refreshing the page, or contact support if the problem
        persists.
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 500px;
  text-align: center;
`;
const Bomb = styled(FaBomb)`
  height: 80px;
  width: 80px;
  margin: 50px 0;
`;

const Message = styled.p`
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 30px;
`;

export default Error;
