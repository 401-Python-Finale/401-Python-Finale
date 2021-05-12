import Link from "next/link";

export default function EditButton() {
    return (
        <div>
            <Link href="profile-setup" className="h-8 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
                Edit Your Profile
            </Link>
        </div>

    );
}