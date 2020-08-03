import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { GrCalendar, GrLocation } from "react-icons/gr";
import moment from "moment";

const ProfileHeader = ({ profile }) => {
  return (
    <>
      <img
        src={profile.bannerSrc}
        alt="banner"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <Wrapper>
        <Avatar src={profile.avatarSrc} alt={profile.displayName} />
        <Button>
          {profile.isBeingFollowedByYou === true ? `Following` : `Follow`}
        </Button>
        <div
          style={{
            fontSize: "larger",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {profile.displayName}
        </div>
        <Grey>@{profile.handle}</Grey>
        {profile.isFollowingYou === true && (
          <span
            style={{
              backgroundColor: "lightgrey",
              borderRadius: "5px",
              padding: "3px",
            }}
          >
            Follows you
          </span>
        )}
        <p>{profile.bio}</p>
        <Grey>
          <GrLocation />
          {profile.location}
        </Grey>
        <Grey>
          <GrCalendar />
          Joined {moment(profile.joined).format("MMMM YYYY")}
        </Grey>
        <div style={{ marginTop: "8px" }}>
          {profile.numFollowing}
          <Grey> Following</Grey>
          {profile.numFollowers}
          <Grey> Followers</Grey>
        </div>
      </Wrapper>
    </>
  );
};

const Avatar = styled.img`
  position: absolute;
  top: -52px;
  width: 100px;
  height: 100px;
  border: 2px solid white;
  border-radius: 50%;
`;
const Grey = styled.span`
  color: rgb(101, 119, 134);
  margin-right: 8px;
  svg {
    color: rgb(101, 119, 134);
  }
`;
const Button = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 25px;
  border: none;
  height: 45px;
  width: 115px;
  margin-right: 10px;
  margin-left: auto;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: larger;
  display: block;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  position: relative;
  padding: 10px;
  width: 100%;
  p {
    margin: 12px 0;
  }
`;

export default ProfileHeader;
