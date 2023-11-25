import Image from "next/image";
import styles from "../styles/home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ comment, user }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated" />
      </Head>
      <div>
        <h1 className="title">Home</h1>
      </div>

      <div className="mt-60 flex justify-between">
        <div className="bg-red-200">
          <h1>User List</h1>
          {user?.map((user) => (
            <div
              onClick={() => router.push(`/user/${user.id}`)}
              className="cursor-pointer"
              key={user.id}
            >
              {user.id}-{user.name}
            </div>
          ))}
        </div>
        <div className="bg-blue-100">
          <h2>User Comments</h2>
          {comment?.map((comments) => (
            <div key={comments.id}>
              {comments.id}-{comments.email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const commentRes = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comment = await commentRes.json();

  const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await userRes.json();

  return {
    props: {
      comment,
      user,
    },
  };
};
