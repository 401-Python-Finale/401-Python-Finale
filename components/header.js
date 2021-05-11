import Link from "next/link";

export default function Header({ username, onLogout }) {
  return (
    <header className="">
          <img src={"/static/images/tdtm_logo.png"} alt="our logo" class="mt-8 ml-8 w-1/12" />

        <div className="grid grid-cols-10 divide-x divide-transparent ml-96 -mt-24">
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

          <Link href="/profile">
          <button className="h-10 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Profile</a>}
            </button>
          </Link>

          <Link href="/home">
          <button className="h-10 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
              {<a>Your Feed</a>}
            </button>
          </Link>

  
        </div>
    </header>
  );
}
