import React from "react";
import moment from "moment";
export const TweetContext = React.createContext(null);

const TweetProvider = ({
  displayName,
  username,
  avatarSrc,
  tweetContents,
  isRetweetedByCurrentUser,
  isLikedByCurrentUser,
  date,
  numOfLikes,
  numOfRetweets,
  children,
  retweetFrom,
  picture,
  id,
}) => {
  const [numOfLikes2, setNumOfLikes] = React.useState(numOfLikes);
  const [numOfRetweets2, setNumOfRetweets] = React.useState(numOfRetweets);
  const [isLiked, setIsLiked] = React.useState(isLikedByCurrentUser);
  const [isRetweeted, setIsRetweeted] = React.useState(
    isRetweetedByCurrentUser
  );
  const fetcher = (type, id, boolean) => {
    if (type === "like") {
      fetch(`/api/tweet/${id}/like`, {
        method: "PUT",
        body: JSON.stringify({ like: boolean }),
        headers: { "Content-Type": "application/json" },
      });
    } else if (type === "retweet") {
      fetch(`/api/tweet/${id}/retweet`, {
        method: "PUT",
        body: JSON.stringify({ retweet: boolean }),
        headers: { "Content-Type": "application/json" },
      });
    }
  };

  const handleLike = () => {
    if (isLikedByCurrentUser === true) {
      fetcher("like", id, false);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes - 1);
      console.log("unliked");
    } else {
      fetcher("like", id, true);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes + 1);
      console.log("liked");
    }
  };
  const handleRetweet = () => {
    if (isRetweetedByCurrentUser === true) {
      console.log("unretweeted");
      fetcher("retweet", id, false);
    } else {
      console.log("retweeted");
      fetcher("retweet", id, true);
    }
  };
  return (
    <TweetContext.Provider
      value={{
        date: moment(date).format("MMM Do"),
        tweetContents: tweetContents,
        displayName: displayName,
        username: username,
        avatarSrc: avatarSrc,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        numOfLikes: numOfLikes2,
        numOfRetweets: numOfRetweets2,
        handleLike: handleLike,
        handleRetweet: handleRetweet,
        retweetFrom: retweetFrom,
        picture: picture,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
export default TweetProvider;
