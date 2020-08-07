import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import ScaleIn from "../LikeButton/ScaleIn";
import { TweetContext } from "../TweetContext";

const ActionBar = () => {
  const {
    handleLike,
    handleRetweet,
    isRetweetedByCurrentUser,
    numOfLikes,
    numOfRetweets,
  } = React.useContext(TweetContext);
  return (
    <Wrapper>
      <Action
        color="rgb(27, 149, 224)"
        size={40}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <TweetActionIcon kind="reply" size={24} />
      </Action>
      <Action
        color="rgb(23, 191, 99)"
        size={40}
        onClick={(event) => {
          event.stopPropagation();
          handleRetweet();
        }}
      >
        {isRetweetedByCurrentUser ? (
          <ScaleIn>
            <TweetActionIcon
              size={24}
              kind="retweet"
              color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            />
          </ScaleIn>
        ) : (
          <TweetActionIcon
            kind="retweet"
            color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            size={24}
          />
        )}
      </Action>
      {numOfRetweets > 0 && (
        <span style={{ position: "absolute", right: "315px" }}>
          {numOfRetweets}
        </span>
      )}
      <Action
        color="rgb(224, 36, 94)"
        size={40}
        onClick={(event) => {
          event.stopPropagation();
          handleLike();
        }}
      >
        <LikeButton />
      </Action>
      {numOfLikes > 0 && (
        <span style={{ position: "absolute", right: "195px" }}>
          {numOfLikes}
        </span>
      )}
      <Action
        color="rgb(27, 149, 224)"
        size={40}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <TweetActionIcon kind="share" size={24} />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  button {
    margin-right: auto;
  }
`;

export default ActionBar;
