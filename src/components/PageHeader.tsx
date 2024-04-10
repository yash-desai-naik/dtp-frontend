import { FaSearch, FaUser } from "react-icons/fa";
import { Input } from "./ui/input";

function PageHeader({ title }) {
    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-sky-200 to-blue-700 py-10">
            <h1 className="text-lg font-bold text-white px-4">{title}</h1>
            <div className="flex items-center space-x-2">
                <div className="relative rounded-full bg-white">
                    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 ml-2 text-gray-500" />
                    <Input className="pl-8 bg-transparent rounded-full focus:outline-none" placeholder="Search..." />
                </div>
                <a href="/profile" className="px-2">
                    <FaUser className="text-white text-xl cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default PageHeader;
