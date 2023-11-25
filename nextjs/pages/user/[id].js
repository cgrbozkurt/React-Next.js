import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserItem = ({userInfo}) => {
  // const [user, setUser] = useState([]);
  // const router = useRouter();
  // const { id } = router.query;


  // useEffect(()=>{
  //   setUser(userInfo.find((u) => u.id === parseInt(id))); 
  // }
  // )

console.log(userInfo)
  return (
    <div className="container">
      UserItem
      <h1>{userInfo?.id}</h1>
      <h1>{userInfo?.name}</h1>
      <h1>{userInfo?.email}</h1>
    </div>
  );
};

export default UserItem;

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const userInfo = await res.json();
  console.log(context)
  return {
    props: {
      userInfo,
    },
  };
};
