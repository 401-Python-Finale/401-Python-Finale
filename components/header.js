import Link from "next/link";

export default function Header({ username, onLogout }) {
  return (
    <header className="my-2 md:mb-24 lg:mb-24 xl:mb-24 w-full">
      <img src={"/static/images/tdtm_logo.png"} alt="our logo" className="w-1/6" />
      <div className=""><img src={"/static/images/profile-pic.png"} alt="my picture" className=" h-20 -mt-10 pl-8 rounded-full md:h-48  lg:pl-28 lg:-mt-32  xl:h-52"/></div>


        <div className="flex justify-evenly">
          {/* Spacer div */}
          <div className="w-1/5 md:w-2/5 lg:w-2/5 xl:w-2/5"></div>
          <Link href="/profile">
          <button className="h-10 px-2 -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Profile</a>}
            </button>
          </Link>

          <Link href="/home">
          <button className="h-10 px-2 -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Feed</a>}
            </button>
          </Link>
          <Link href="/">
            <button className="h-10 px-2 -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
              <a onClick={onLogout}>Sign Out</a>
            </button>
          </Link>
 
        </div>
          <p className="-mt-4 mr-8 border-b-2 border-gray ml-48 md:ml-56 lg:ml-80 xl:ml-80 md:-mt-16 lg:-mt-16 xl:-mt-16 text-lg md:text-2xl lg:text-2xl xl:text-2xl text-dark-blue"> Hi, {username} </p>
    </header>
  );
}
