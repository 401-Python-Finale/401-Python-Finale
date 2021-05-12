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
            <div className="ml-16 mr-16">
            <img src={"/static/images/abstract-bg-image-blue.jpeg"} alt="our logo" className="object-top w-full h-48"/>
            </div>
            <Languages />
            <PostForm />

            <Feed />
            <Links />
            <EditButton />
            <Footer />
        </div>
    );
}
