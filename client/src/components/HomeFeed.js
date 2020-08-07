import React from "react";
import styled from "styled-components";
import FeedTweet from "./FeedTweet";
import NewTweet from "./NewTweet";
import TweetProvider from "./TweetContext";
import { CurrentUserContext } from "./CurrentUserContext";
import Spinner from "./Spinner";
import { useHistory } from "react-router-dom";
const HomeFeed = () => {
  let history = useHistory();
  const [tweets, setTweets] = React.useState(null);
  const [tweetList, setTweetList] = React.useState(null);
  const [update, setUpdate] = React.useState(false);
  React.useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweets(data.tweetsById);
        setTweetList(data.tweetIds);
      });
  }, [update]);
  function handleClick(id) {
    history.push(`/tweet/${id}`);
  }

  const handleTest = (ev) => {
    console.log(ev);
  };
  // React.useEffect((event) => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown(event));
  //   };
  // }, []);
  return (
    <Wrapper>
      <header>Home</header>
      <Divider />
      <NewTweet
        currentUser={React.useContext(CurrentUserContext).currentUser}
        setUpdate={setUpdate}
        update={update}
      />
      <Divider style={{ height: "8px" }} />
      {tweetList === null ? (
        <Spinner />
      ) : (
        tweetList.map((id) => {
          let tweet = tweets[id];
          return (
            <div onClick={() => handleClick(tweet.id)} key={tweet.id}>
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
                picture={tweet.media[0]}
                id={tweet.id}
              >
                <FeedTweet />
              </TweetProvider>
              <Divider />
            </div>
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
