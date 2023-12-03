import React, { useRef } from "react";
import UserLIst from "./UserLIst";
import CreateUser from "./CreateUser";

function App() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "김희찬",
      email: "heedda.kollim@gmail.com",
    },
    {
      id: 3,
      username: "조영준",
      email: "장애",
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser />
      <UserLIst user={users} />
    </>
  );
}

export default App;
