import { useState, useEffect } from "react";
import useSWR from "swr";
import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Languages from "../components/languages";
import Links from "../components/links";
import EditButton from "../components/edit-profile-button";
import Feed from "../components/feed";
import {
  Post,
  postWithToken,
  fetchPostsWithToken,
  apiUrl,
} from "../services/data-fetcher";
import NewsFeed1 from "../components/new-feed";

export default function Home({ token, onLogout, username }) {
  const { data, error, mutate } = useSWR([apiUrl, token], fetchPostsWithToken);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!data) return;
    setPosts(data.reverse());
  }, [data]);

  if (error) return <h2>Something went wrong!</h2>;
  if (!data) return <h2>Loading...</h2>;

  async function createHandler(values) {
    const newPost = Post.fromValues(values);

    newPost.post += "..."; 

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
          token={token}
        />
      </div>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <div className="flex justify-evenly">
          <img
            src={"/static/images/cf-logo.png"}
            alt="custom image"
            className="h-32 mx-auto"
          />
          <img
            src={"/static/images/pythonista.png"}
            alt="custom image"
            className="h-32 mx-auto"
          />
          <img
            src={"/static/images/javascript.png"}
            alt="custom image"
            className="h-32 mx-auto"
          />
          <img
            src={"/static/images/tailwind.jpg"}
            alt="custom image"
            className="h-32 mx-auto"
          />
          <img
            src={"/static/images/react.png"}
            alt="custom image"
            className="h-32 mx-auto"
          />
          <img
            src={"/static/images/GitHub-logo.jpeg"}
            alt="custom image"
            className="h-32 mx-auto"
          />
      </div>
        
        <div className="h-20"></div>
      <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
        <div>
          <PostForm onCreate={createHandler} />
          <Links />
          <div className="">
            <NewsFeed1 />
          </div>
        </div>

        <div className="">
          <Feed data={data} />
        </div>

        
        <div className="">
          <Footer />
        </div>
      </div>
      </div>
  );
}
