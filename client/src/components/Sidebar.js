import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiBookmark, FiBell, FiUser } from "react-icons/fi";
import { COLORS } from "../constants";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const NavigationLink = styled(NavLink)`
  color: black;

  li {
    padding: 10px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    span {
      margin-left: 14px;
      font-size: larger;
      font-weight: bold;
    }
    &:hover {
      background-color: #e6e6ff;
    }
  }
  &:hover {
    color: ${COLORS.primary};
    background-color: lightgray;
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const NavBar = styled.ul``;

const Sidebar = () => {
  return (
    <div>
      <NavBar>
        <li>
          <Logo
            style={{
              height: 60,
              width: 60,
              marginTop: "20px",
              marginBottom: "8px",
            }}
          />
        </li>
        <NavigationLink exact={true} to="/">
          <li>
            <FiHome style={{ height: 30, width: 30 }} />
            <span>Home</span>
          </li>
        </NavigationLink>
        <NavigationLink to="/:profileId">
          <li>
            <FiUser style={{ height: 30, width: 30 }} />
            <span>Profile</span>
          </li>
        </NavigationLink>
        <NavigationLink to="/notifications">
          <li>
            <FiBell style={{ height: 30, width: 30 }} />
            <span>Notifications</span>
          </li>
        </NavigationLink>
        <NavigationLink to="/bookmarks">
          <li>
            <FiBookmark style={{ height: 30, width: 30 }} />
            <span>Bookmarks</span>
          </li>
        </NavigationLink>
      </NavBar>
    </div>
  );
};
export default Sidebar;
