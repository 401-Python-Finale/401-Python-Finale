import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";


export default function Home() {
  return (
    <div>
      <Header title="Talk Dev To Me" username="ashcas" />

      <PostForm />

      <Feed />


      <Footer />
    </div>
  );
}
