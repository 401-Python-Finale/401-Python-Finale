import { useState, useEffect } from "react";
import useSWR from "swr";
import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";
import {
  Post,
  postWithToken,
  fetchPostsWithToken,
  apiUrl,
} from "../services/data-fetcher";

export default function Home({ token, onLogout, username }) {
  const { data, error, mutate } = useSWR([apiUrl, token], fetchPostsWithToken);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!data) return;
    setPosts(data);
  }, [data]);

  if (error) return <h2>Something went wrong!</h2>;
  if (!data) return <h2>Loading...</h2>;

  async function createHandler(values) {
    const newPost = Post.fromValues(values);

    newPost.post += "..."; // Add the ... to show loading state

    const updatedPosts = [newPost, ...posts];

    mutate(updatedPosts, false);

    await postWithToken(token, values);

    mutate();
  }

  return (
    <div className="h-screen">
      <div className="">
        <Header
          title="Talk Dev To Me"
          username={username}
          onLogout={onLogout}
        />
      </div>

      {/* Main Page div */}
      <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
        <div>
          <PostForm onCreate={createHandler} />
        </div>
        <div>
          <Feed data={data} />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
