import Image from 'next/image'
import styles from "../styles/home.module.css"
import Head from 'next/head'

export default function Home() {

  const number=7;

  return (
<div className={styles.container}>
  <Head>
<title>Home</title>
<meta name='description' content='Generated'  />

  </Head>
  <h1 className='title'>Home</h1>
  <style jsx >{` 
  .title{
    display:${number>2 ? "block" : "none"};
    color:${number>5? "red": "yellow"}
  }
  `} </style>
</div>   
  )
}
