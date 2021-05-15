import Link from "next/link";

export default function Header({ username, onLogout, token }) {
  return (
    <header className="mb-8 bg-gray h-32">
      <img
        src={"/static/images/tdtm_logo.png"}
        alt="our logo"
        className="m-4 w-1/6"
      />
      <div className="">
        <img
          src={"/static/images/profile-pic.png"}
          alt="my picture"
          className="h-20 mr-10 pl-8 rounded-full md:h-48  lg:pl-28 lg:-mt-32  xl:h-52"
        />
      </div>

      <div className="flex justify-evenly -mt-10">
        <p className=" -mt-20 md:ml-56 lg:ml-80 xl:ml-96  text-lg md:text-2xl  lg:text-2xl xl:text-2xl text-dark-blue">
          {" "}
          Hi, {username}{" "}
        </p>
        <div className="w-1/5 md:w-2/5 lg:w-3/5 xl:w-2/5"></div>
          <button className="h-10 px-2 -mt-16 md:-mt-40 lg:-mt-40 xl:-mt-40 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
            <a>Edit Profile</a>
          </button>
          <Link href="/">
            <button className="h-10 px-2 -mt-16 md:-mt-40 lg:-mt-40 xl:-mt-40 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
              <a onClick={onLogout}>Sign Out</a>
            </button>
          </Link>
      </div>
    </header>
  );
}
