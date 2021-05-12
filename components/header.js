import Link from "next/link";

export default function Header({ username, onLogout }) {
  return (
    <header className="m-4 w-full">
      <img src={"/static/images/tdtm_logo.png"} alt="our logo" className="w-1/6" />

        <div className="flex justify-evenly ">
          {/* Spacer div */}
          <div className="w-1/5 md:w-2/5 lg:w-2/5 xl:w-2/5"></div>
          <Link href="/profile">
          <button className="h-10 px-2 -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Profile</a>}
            </button>
          </Link>

          <Link href="/home">
          <button className="h-10 px-2 -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Feed</a>}
            </button>
          </Link>
          <Link href="/">
            <button className="h-10 px-2 -mt-16 md:-mt-32 lg:-mt-32 xl:-mt-32 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              <a onClick={onLogout}>Sign Out</a>
            </button>
          </Link>
 
        </div>
          <p className="pt-4 md:ml-10 lg:ml-10 xl:ml-10 text-lg md:text-xl lg:text-xl xl:text-xl text-dark-blue">Hi, {username}</p>
    </header>
  );
}
