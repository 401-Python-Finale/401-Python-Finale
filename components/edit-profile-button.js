import Link from "next/link";

export default function EditButton() {
    return (
        <div>
            <Link href="profile-setup" className="">
                Edit Your Profile
            </Link>
        </div>

    );
}