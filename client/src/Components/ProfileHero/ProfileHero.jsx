import "./ProfileHero.css";
import ProfileNav from "../ProfileNav/ProfileNav";
import ProfileCover from "../ProfileCover/ProfileCover";

function ProfileHero() {
  
  return (
    <div className="profile-hero">
      <ProfileNav />
      <ProfileCover 
      />
    </div>
  );
}

export default ProfileHero;
