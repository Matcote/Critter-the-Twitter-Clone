import React from "react";
import Tweet from "./Tweet";
import Spinner from "./Spinner";
import TweetProvider from "./TweetContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        setTweet(data.tweet);
      });
  }, [tweetId]);
  return (
    <Wrapper>
      <header>
        <Link to="/">
          <IoMdArrowRoundBack style={{ color: "rgb(101, 119, 134)" }} />
        </Link>
        <span>Meow</span>
      </header>
      <Divider />
      {tweet === null ? (
        <Spinner />
      ) : (
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
            picture={tweet.media[0]}
          >
            <Tweet key={tweet.id} />
          </TweetProvider>
          <Divider />
        </>
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
    padding: 12px;
    span {
      margin-left: 6px;
    }
    a {
      svg {
        vertical-align: bottom;
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default TweetDetails;
