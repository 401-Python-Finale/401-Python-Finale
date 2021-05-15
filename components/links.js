import Link from "next/link";

export default function Links() {
    return (
        <div>
            <div className="text-sm -mt-48 md:text-base lg:text-lg xl:text-xl">
            <h1 className="text-dark-blue">Your Links</h1>
            <ul>
                <Link><li>https://sharetechlinks.com/</li></Link>
                <Link><li>https://github.com/401-Python-Finale/talk_dev_to_me</li></Link>
                <Link><li>https://www.linkedin.com/in/kimdamalas</li></Link>
            </ul>
            </div>
        </div>

    );
}