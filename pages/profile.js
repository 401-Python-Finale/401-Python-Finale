import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";
import Languages from "../components/languages";
import Links from "../components/links";
import EditButton from "../components/edit-profile-button";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetchPostsWithToken, apiUrl } from "../services/data-fetcher";

export default function Home({ token }) {
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
    return (
      <div className="">
        <Header title="Talk Dev To Me" username="ashcas" />
        <div className="md:ml-96 lg:mx-auto xl:mx-auto md:h-96 lg:h-96 xl:h-96 md:-mt-30 lg:-mt-50 xl:-mt-50">
          <img
            src={"/static/images/pythonista.png"}
            alt="custom image"
            className="mx-auto h-32 rounded-full md:h-48  lg:h-48  xl:h-48"
          />
        </div>
        <div>
          <div className="flex justify-between text-left mx-8 md:mx-16 lg:mx-16 xl:mx-16">
            <div className="md:-mt-32 lg:-mt-32 xl:-mt-32">
              <Languages />
            </div>
            <EditButton />
            <div className="md:-mt-32 lg:-mt-32 xl:-mt-32">
              <Links />
            </div>
          </div>
          <div>
            <PostForm onCreate={createHandler} />
            <Feed data={data} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
