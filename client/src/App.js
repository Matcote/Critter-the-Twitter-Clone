import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import TweetDetails from "./components/TweetDetails";
import GlobalStyle from "./GlobalStyles";
import Sidebar from "./components/Sidebar";
import { CurrentUserContext } from "./components/CurrentUserContext";
import Spinner from "./components/Spinner";

function App() {
  const { status, currentUser } = React.useContext(CurrentUserContext);
  return (
    <Router>
      <GlobalStyle />
      <div className="main">
        {status === "idle" ? (
          <>
            <Sidebar currentUser={currentUser} />
            <Switch>
              <Route exact={true} path="/">
                <HomeFeed />
              </Route>
              <Route path="/notifications">
                <Notifications />
              </Route>
              <Route path="/bookmarks">
                <Bookmarks />
              </Route>
              <Route path="/tweet/:tweetId">
                <TweetDetails />
              </Route>
              <Route path="/:profileId">
                <Profile />
              </Route>
            </Switch>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </Router>
  );
}

export default App;
