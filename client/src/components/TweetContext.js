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
}) => {
  const [numOfLikes2, setNumOfLikes] = React.useState(numOfLikes);
  const [numOfRetweets2, setNumOfRetweets] = React.useState(numOfRetweets);
  const [isLiked, setIsLiked] = React.useState(isLikedByCurrentUser);
  const [isRetweeted, setIsRetweeted] = React.useState(
    isRetweetedByCurrentUser
  );

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked === true) {
      setNumOfLikes(numOfLikes2 - 1);
    } else {
      setNumOfLikes(numOfLikes2 + 1);
    }
  };
  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    if (isRetweeted === true) {
      setNumOfRetweets(numOfRetweets2 - 1);
    } else {
      setNumOfRetweets(numOfRetweets2 + 1);
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
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
export default TweetProvider;
