import Link from "next/link";

export const NavBar = () => {

    return(
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between">
                    <Link href="/" className="text-xl font-bold">DotFilms</Link>
                    <Link href="mylist">My List</Link>
                </div>
            </nav>
    );
}