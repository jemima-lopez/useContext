/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="list-group h-100">
      {
        // eslint-disable-next-line no-undef
        users.map(user => (
          <a
            className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            href="#!"
            key={user.id} onClick={() => getProfile(user.id)}>
            <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width={70} />
            <p>
              {`${user.firs_name} ${user.last_name}`}
            </p>
          </a>
        ))
      }
    </div>
  );
}

export default UserList;
