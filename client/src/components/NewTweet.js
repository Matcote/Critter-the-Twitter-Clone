import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const NewTweet = ({ currentUser }) => {
  return (
    <>
      <Wrapper>
        <Avatar src={currentUser.avatarSrc} alt={currentUser.handle} />
        <Input name="meow" placeholder="What's happening?" />
      </Wrapper>
      <Meow>Meow</Meow>
    </>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  display: flex;
`;
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const Input = styled.textarea`
  margin: 0 15px;
  width: 100%;
  height: 130px;
  border: none;
  font-family: sans-serif;
  font-size: large;
  padding: 8px;
  outline: none;
  resize: none;
`;
const Meow = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 25px;
  border: none;
  height: 45px;
  width: 95px;
  margin-left: auto;
  margin-right: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: larger;
  display: block;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export default NewTweet;
