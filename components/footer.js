import Link from "next/link";


export default function Footer() {
  return <footer className = "relative mt-12 bottom-8 ml-10 border-top-gray-200">
    <Link href="about" >
      <a className="text-dark-blue text-lg p-2 hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">Meet the Makers</a>
    </Link>
    <p className="mt-2">&copy; {new Date().getFullYear()} Copyright:TDTM</p>

  </footer>;
}
