import React from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory, Link } from "react-router-dom";
import Spinner from "./Spinner";
import FeedTweet from "./FeedTweet";
import styled from "styled-components";
import TweetProvider from "./TweetContext";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  const history = useHistory();
  const { profileId } = useParams();
  const [profile, setProfile] = React.useState(null);
  const [tweets, setTweets] = React.useState(null);
  const [tweetList, setTweetList] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile);
        fetch(`/api/${profileId}/feed`)
          .then((res) => res.json())
          .then((data) => {
            setTweets(data.tweetsById);
            setTweetList(data.tweetIds);
          });
      });
    return () => {
      setTweets(null);
      setTweetList(null);
    };
  }, [profileId]);
  function handleClick(id) {
    history.push(`/tweet/${id}`);
  }
  return (
    <Wrapper>
      <header>
        <Link to="/">
          <IoMdArrowRoundBack style={{ color: "rgb(101, 119, 134)" }} />
        </Link>
        <span>Profile</span>
      </header>
      <Divider />
      {profile === null ? (
        <Spinner />
      ) : (
        <>
          <ProfileHeader profile={profile} />
          <Divider />
          {tweetList === null ? (
            <Spinner />
          ) : (
            tweetList.map((id, index) => {
              let tweet = tweets[id];
              return (
                <div onClick={() => handleClick(tweet.id)} key={index}>
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

export default Profile;
