import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";
import Languages from "../components/languages";
import Links from "../components/links";
import EditButton from "../components/edit-profile-button";



export default function Profile() {
    return (
        <div className="mx-8">

            <Header title="Talk Dev To Me" username="ashcas" />
            <div className="md:ml-96 lg:mx-auto xl:mx-auto md:w-96 lg:w-96 xl:w-96 md:-mt-30 lg:-mt-50 xl:-mt-30">
                <div className="z-1"><img src={"/static/images/abstract-bg-image-blue.jpeg"} alt="custom image" className="w-full object-top h-24 rounded-lg md:h-48 lg:h-48 xl:h-48"/></div>
                <div className="z-100 -mt-20 md:-mt-40 lg:-mt-40 xl:-mt-40"><img src={"/static/images/profile-pic.png"} alt="my picture" className="mx-auto h-32 rounded-full md:h-48  lg:h-48  xl:h-48"/></div>
            </div>
            {/* Main Page Div */}
            <div >
                <div className="flex justify-between text-left mx-4 md:mx-8 lg:mx-8 xl:mx-8">
                    <div className="md:-mt-32 lg:-mt-32 xl:-mt-32"><Languages /></div>
                    <EditButton />
                    <div className="md:-mt-32 lg:-mt-32 xl:-mt-32"><Links /></div>
                </div>
                <div>
                    <PostForm />
                    <Feed />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
