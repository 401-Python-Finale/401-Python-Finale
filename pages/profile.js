import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";
import Languages from "../components/languages";
import Links from "../components/links";
import EditButton from "../components/edit-profile-button";



export default function Profile() {
    return (
        <div className="">

            <Header title="Talk Dev To Me" username="ashcas" />
            {/* <div className="md:ml-96 lg:mx-auto xl:mx-auto md:h-96 lg:h-96 xl:h-96 md:-mt-30 lg:-mt-50 xl:-mt-50"> */}
                <div className="md:ml-96 lg:mx-auto xl:mx-auto md:h-96 lg:h-96 xl:h-96 md:-mt-30 lg:-mt-50 xl:-mt-50"><img src={"/static/images/pythonista.png"} alt="custom image" className="mx-auto h-32 rounded-full md:h-48  lg:h-48  xl:h-48"/></div>
                {/* <div className="z-1 invisible"><img src={"/static/images/abstract-bg-image-blue.jpeg"} alt="custom image" className="w-full object-top h-24 rounded-lg md:h-48 lg:h-48 xl:h-48"/></div> */}
                {/* <div className="z-100 -mt-20 md:-mt-40 lg:-mt-40 xl:-mt-40"><img src={"/static/images/profile-pic.png"} alt="my picture" className="mx-auto h-32 rounded-full md:h-48  lg:h-48  xl:h-48"/></div> */}
            {/* </div> */}
            {/* Main Page Div */}
            <div >
                <div className="flex justify-between text-left mx-8 md:mx-16 lg:mx-16 xl:mx-16">
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
