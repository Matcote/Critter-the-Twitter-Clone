import React from "react";
import styled from "styled-components";

import ActionBar from "./ActionBar";
import { TweetContext } from "../TweetContext";
import RetweetBar from "./RetweetBar";
import { NavLink } from "react-router-dom";

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
    retweetFrom,
    picture,
  } = React.useContext(TweetContext);
  const handleTest = (event) => {
    console.log(event);
  };
  return (
    <>
      {retweetFrom && <RetweetBar retweetFrom={retweetFrom} />}
      <Wrapper onKeyDown={handleTest} aria-label="view tweet" tabIndex="0">
        <Avatar src={avatarSrc} />
        <div style={{ margin: "0 8px", width: "100%" }}>
          <Name>
            <DisplayName
              to={`/${username}`}
              onClick={(event) => {
                event.stopPropagation();
              }}
              tabIndex="0"
            >
              {displayName}
            </DisplayName>
            <Username>@{username}</Username>
            <Timestamp>
              {" • "}
              {date}
            </Timestamp>
          </Name>
          <TweetContents>{tweetContents}</TweetContents>
          {picture && <Image src={picture.url} alt="tweetimage" />}
          <ActionBar
            isRetweetedByCurrentUser={isRetweetedByCurrentUser}
            isLikedByCurrentUser={isLikedByCurrentUser}
            handleLike={handleLike}
            handleRetweet={handleRetweet}
            numOfLikes={numOfLikes}
            numOfRetweets={numOfRetweets}
          />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 10px 16px 10px 16px;
  text-align: left;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  object-fit: cover;
`;
const TweetContents = styled.div`
  padding: 8px 0;
`;

const Timestamp = styled.span`
  color: rgb(101, 119, 134);
  line-height: 20px;
  margin-left: 4px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const Name = styled.div`
  flex: 1;
  display: flex;
`;

const DisplayName = styled(NavLink)`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
  margin-left: 3px;
`;

export default Tweet;
