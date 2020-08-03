import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const NewTweet = ({ currentUser, update, setUpdate }) => {
  const handleClick = () => {
    const button = document.getElementById("submit");
    button.disabled = true;
    button.style.opacity = "0.2";
    button.style.cursor = "not-allowed";
    fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({ status: meow }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setUpdate(!update);
      setMeow("");
    });
  };
  const [meow, setMeow] = React.useState("");
  const charsRemaining = 280 - meow.length;
  const charColors = () => {
    const color = document.getElementById("char");
    const button = document.getElementById("submit");
    if (meow.length >= 225 && meow.length <= 280) {
      color.style.color = "gold";
      button.disabled = false;
      button.style.opacity = "1";
      button.style.cursor = "pointer";
    } else if (meow.length >= 281) {
      color.style.color = "fireBrick";
      button.disabled = true;
      button.style.opacity = "0.2";
      button.style.cursor = "not-allowed";
    } else if (meow.length >= 1 && meow.length <= 280) {
      color.style.color = "lightgray";
      button.disabled = false;
      button.style.opacity = "1";
      button.style.cursor = "pointer";
    } else {
      color.style.color = "lightgray";
      button.disabled = true;
      button.style.opacity = "0.2";
      button.style.cursor = "not-allowed";
    }
  };
  React.useEffect(() => {
    charColors();
  });
  return (
    <>
      <Wrapper>
        <Avatar src={currentUser.avatarSrc} alt={currentUser.handle} />
        <Input
          name="meow"
          id="meow"
          placeholder="What's happening?"
          value={meow}
          onChange={(event) => {
            setMeow(event.target.value);
          }}
        />
      </Wrapper>
      <Char id="char">{charsRemaining}</Char>
      <Meow onClick={handleClick} id="submit">
        Meow
      </Meow>
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
  margin-right: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: larger;
  display: inline-block;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
const Char = styled.div`
  margin-left: 435px;
  display: inline-block;
  width: 40px;
`;

export default NewTweet;
