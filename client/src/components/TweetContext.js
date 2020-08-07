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
    if (isLiked === true) {
      fetcher("like", id, false);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes - 1);
    } else {
      fetcher("like", id, true);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes + 1);
    }
  };
  const handleRetweet = () => {
    if (isRetweeted === true) {
      fetcher("retweet", id, false);
      setNumOfRetweets(numOfRetweets - 1);
      setIsRetweeted(!isRetweeted);
    } else {
      fetcher("retweet", id, true);
      setIsRetweeted(!isRetweeted);
      setNumOfRetweets(numOfRetweets + 1);
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
