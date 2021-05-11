import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";


export default function Home() {
  return (
    <div>
      <div className="">
        <Header title="Talk Dev To Me" username="ashcas" />
      </div>
      <div className="h-10">
      {/* Spacing div */}
      </div>

      <div className="ml-48 flex justify-between">
        <PostForm />
        <div>
          <Feed />
        </div>
      </div>

      <Footer />
    </div>
  );
}
