import Link from "next/link";

export default function Links() {
    return (
        <div className="mb-20 text-lg">
            <h1 className="text-center text-dark-blue">Your Saved Links</h1>
            <h1 className="text-center text-dark-blue">-------------------</h1>
            <ul className="ml-48 text-left">
                <li>https://www.linkedin.com/in/kimdamalas/</li>
                <li>https://sharetechlinks.com/posts</li>
                <li>https://github.com/401-Python-Finale/talk_dev_to_me</li>
            </ul>
            <div classname="h-20"></div>
        </div>

    );
}