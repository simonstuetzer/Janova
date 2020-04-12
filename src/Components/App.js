import React from "react";
//import Footer from "./Footer";
//import Main from "./Main";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from "./Search";
import Track from "./Track";
import Activity from "./Activity";
import Profile from "./Profile";

import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { janovaStyle } from "./JanovaStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(janovaStyle);

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default props => {
  const classes = useStyles();
  const [value, setValue] = React.useState("feed");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mainApp">
      <Router>
        <CssBaseline />
        <Header />
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/track">
            <Track />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.bottomNavigation}
          showLabels
        >
          <BottomNavigationAction
            label="Feed"
            value="feed"
            icon={<HomeIcon />}
            to="/"
            component={Link}
          />
          <BottomNavigationAction
            label="Suche"
            value="search"
            icon={<SearchIcon />}
            to="/search"
            component={Link}
          />
          <BottomNavigationAction
            label="Track"
            value="track"
            icon={<AddCircleOutlineIcon />}
            to="/track"
            component={Link}
          />
          <BottomNavigationAction
            label="Aktivität"
            value="activity"
            icon={<FavoriteIcon />}
            to="/activity"
            component={Link}
          />
          <BottomNavigationAction
            label="Profil"
            value="profil"
            icon={<AccountCircleIcon />}
            to="/profile"
            component={Link}
          />
        </BottomNavigation>
      </Router>
    </div>
  );
};
