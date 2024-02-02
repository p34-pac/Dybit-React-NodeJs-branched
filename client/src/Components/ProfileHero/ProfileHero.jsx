// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ProfileHero.css";
import ProfileNav from "../ProfileNav/ProfileNav";
import ProfileCover from "../ProfileCover/ProfileCover";

function ProfileHero() {
  return (
    <div className="profile-hero">
      <ProfileNav />
      <ProfileCover 
        referrals={10} 
        currentLevel={3} 
      />
    </div>
  );
}

export default ProfileHero;
