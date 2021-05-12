import Link from "next/link";


export default function Footer() {
  return <footer className = "ml-2 md:object-left-bottom lg:object-left-bottom">
    {/* Spacer div */}
    <div className="h-12 md:h-28 lg:h-28"></div>

    <Link href="about" >
      <a className="text-sm md:text-base lg:test-lg text-dark-blue p-2 hover:ring-4 hover:ring-dark-blue hover:ring-opacity-50">Meet the Makers</a>
    </Link>
    <p className="mt-2 text-sm md:text-base lg:test-lg">&copy; {new Date().getFullYear()} Copyright:TDTM</p>

  </footer>;
}
