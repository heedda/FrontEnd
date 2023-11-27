import React from "react";

const UserLIst = () => {
  function User({ user }) {
    return (
      <div>
        <b>{user.userName}</b> <span> : {user.email}</span>
      </div>
    );
  }
  const users = [
    {
      id: 1,
      userName: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      userName: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      userName: "liz",
      email: "liz@example.com",
    },
    {
      id: 4,
      userName: "heechan",
      email: "heedda.kollim@gmail.com",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserLIst;
