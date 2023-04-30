import Link from "next/link";
import logo from '../public/logo.png';

const Header = () => {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img
                        className="w-10 sm:w-15 lg:w-20 md:w-20 xl:w-25 2xl:w-30 object-contain cursor-pointer"
                        src='https://tpogecp.vercel.app/logo.png'
                        alt="" />
                </Link>
                            </div>
            <div className="flex items-center space-x-5">
            <a href="/"><h3>Home</h3></a>
                <h3 className="border rounded-full px-3 py-1">
                <a href="/placed">Student Placed</a></h3>
            </div>
        </header>)
}

export default Header