import React from "react";
import styled from "styled-components";
import FeedTweet from "./FeedTweet";
import NewTweet from "./NewTweet";
import TweetProvider from "./TweetContext";
import { CurrentUserContext } from "./CurrentUserContext";
import Spinner from "./Spinner";

const HomeFeed = () => {
  const [tweets, setTweets] = React.useState(null);
  const [tweetList, setTweetList] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweets(data.tweetsById);
        setTweetList(data.tweetIds);
      });
  }, [tweets]);
  return (
    <Wrapper>
      <header>Home</header>
      <Divider />
      <NewTweet
        currentUser={React.useContext(CurrentUserContext).currentUser}
      />
      <Divider style={{ height: "8px" }} />
      {tweetList === null ? (
        <Spinner />
      ) : (
        tweetList.map((id, index) => {
          let tweet = tweets[id];
          return (
            <>
              <TweetProvider
                displayName={tweet.author.displayName}
                username={tweet.author.handle}
                avatarSrc={tweet.author.avatarSrc}
                tweetContents={tweet.status}
                isRetweetedByCurrentUser={tweet.isLiked}
                isLikedByCurrentUser={tweet.isRetweeted}
                date={tweet.timestamp}
                numOfLikes={tweet.numLikes}
                numOfRetweets={tweet.numRetweets}
                retweetFrom={tweet.retweetFrom}
              >
                <FeedTweet key={tweet.id} />
              </TweetProvider>
              <Divider />
            </>
          );
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: auto;
  text-align: left;
  border: 1px solid lightgray;
  header {
    font-size: larger;
    font-weight: bold;
    padding: 12px 20px;
  }
`;
const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;
export default HomeFeed;
