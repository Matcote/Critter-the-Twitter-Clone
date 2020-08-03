import React from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { TweetContext } from "../TweetContext";
import Stat from "./Stat";

const Tweet = () => {
  const {
    displayName,
    username,
    avatarSrc,
    tweetContents,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    date,
    numOfLikes,
    numOfRetweets,
    handleLike,
    handleRetweet,
    picture,
  } = React.useContext(TweetContext);
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      {picture && <Image src={picture.url} alt="tweetimage" />}
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <Stat num={numOfRetweets} type="Retweet" />
        <Stat num={numOfLikes} type="Like" />
      </Stats>
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
        handleLike={handleLike}
        handleRetweet={handleRetweet}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;
export default Tweet;
