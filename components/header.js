import Link from "next/link";

export default function Header({ username, onLogout }) {
  return (
    <header className="m-8">
          <img src={"/static/images/tdtm_logo.png"} alt="our logo" className="mt-8 m-8 w-1/12 mb-8" />

        <div className="grid grid-cols-10 ml-96 -mt-24 border-b-2">
          <p className="-ml-48 h-10 text-xl text-dark-blue">Hi, {username}</p>
          {/* Move grid columns to end of doc */}
          <div></div>
          <div></div>
          <div></div>
          <Link href="/">
            <button className="h-10 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              <a onClick={onLogout}>Sign Out</a>
            </button>
          </Link>
          <div></div>
          <Link href="/profile">
          <button className="h-10 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Profile</a>}
            </button>
          </Link>
          <div></div>



          <Link href="/home">
          <button className="h-10 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Feed</a>}
            </button>
          </Link>

  
        </div>
    </header>
  );
}
