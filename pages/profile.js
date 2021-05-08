import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";
import Languages from "../components/languages";
import Links from "../components/links";
import EditButton from "../components/edit-profile-button";



export default function Home() {
    return (
        <div>

            <Header title="Talk Dev To Me" username="ashcas" />
            <img src={"/static/images/construction.jpg"} alt="our logo" />
            <Languages />
            <PostForm />

            <Feed />
            <Links />
            <EditButton />
            <Footer />
        </div>
    );
}
