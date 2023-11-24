import Image from 'next/image'
import styles from "../styles/home.module.css"
import Head from 'next/head'

export default function Home({com,user}) {

  const number=7;

  return (
<div className={styles.container}>
  <Head>
<title>Home</title>
<meta name='description' content='Generated'  />

  </Head>
 <div> <h1 className='title '>Home</h1></div>
  <style jsx >{` 
  .title{
    display:${number>2 ? "block" : "none"};
    color:${number>5? "red": "yellow"}
  }
  `} </style>

  <div className='mt-60 flex justify-between'>
<div className='bg-red-200'>
<h1>User List</h1>
  {user?.map((user)=>(
    <div key={user.id}>{user.id}-{user.name} </div>
  ))}
</div>
<div className=' bg-blue-100'>
  <h2>User Comments  </h2>
  {com?.map((comments)=>(
    <div key={comments.id}>{comments.id}-{comments.email} </div>
  ))}
</div>

  </div>
</div>   
  )
}

// export const getServerSideProps=async ()=>{
//   const res=await fetch("https://jsonplaceholder.typicode.com/users");
//   const user=await res.json();

//   return{
//     props:{
//       user
//     }
//   }
// }

export const getStaticProps=async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/comments");
  const com=await res.json();

    const resp=await fetch("https://jsonplaceholder.typicode.com/users");
  const user=await resp.json();

  return{
    props:{
      com,
      user
    }
  }
}
