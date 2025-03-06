import { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {

  const { user } = useContext(userContext);
  if(!user) return null
  return (
    <div>
      <h1>profile page</h1>
      <h4>username:- {user.username}</h4>
      <h4>password:- {user.password}</h4>
    </div>
  );
};
export default Profile;
