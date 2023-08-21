import Link from "next/link";

const Nav = () => {
    return (
        <div className="space-x-4 text-lg">
            <Link href={'/menu'} className="hover:bg-gray-200/50 px-2 rounded-full transition ease-in duration-100">menu</Link>
            <Link href={'/analytics'} className="hover:bg-gray-200/50 px-2 rounded-full transition ease-in duration-100">analytics</Link>
            <Link href={'/settings'} className="hover:bg-gray-200/50 px-2 rounded-full transition ease-in duration-100">settings</Link>
        </div>
    )
}

export default Nav;