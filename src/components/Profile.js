/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            className="card-img-top rounded-circle m-auto img-fluid" width={90}/>
          <h1>{`${selectedUser.firt_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  );
};

export default Profile;
