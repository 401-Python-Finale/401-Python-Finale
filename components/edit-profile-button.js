import Link from "next/link";

export default function EditButton() {
    return (
        <div className="m-4">
            <Link href="profile-setup" >
                <a className="h-8 text-sm p-2 md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-dark-blue hover:ring-opacity-50">Edit Profile</a>
            </Link>
        </div>

    );
}