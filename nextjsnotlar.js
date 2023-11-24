// js içinde css  / css in js 

<style jsx >{` 
  .title{
    display:${number>2 ? "block" : "none"};
    color:${number>5? "red": "yellow"}
  }
  `} </style>

// js içinde css  / css in js 


  // fetch SSR getServerSideProps 

  export const getServerSideProps=async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const com=await res.json();
  
    return{
      props:{
        com
      }
    }
  }

  // fetch SSR getServerSideProps 

  // fetch getStaticProps statik fetch  çoklu fetch  çoklu API api 

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
  // fetch getStaticProps statik fetch  çoklu fetch  çoklu API api 

