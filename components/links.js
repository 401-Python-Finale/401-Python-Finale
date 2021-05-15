import Link from "next/link";

export default function Links() {
    return (
        <div className="text-lg">
            <h1 className="text-center mt-20 text-dark-blue">Your Saved Links</h1>
            <h1 className="text-center text-dark-blue">-------------------</h1>
            <ul className="text-left ml-48">
                <li>sharetechlinks.com</li>
                <li>https://www.linkedin.com/in/kimdamalas/</li>
                <li>https://github.com/401-Python-Finale/talk_dev_to_me</li>
            </ul>
        </div>

    );
}