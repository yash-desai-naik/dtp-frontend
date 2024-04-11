import { FaSearch, FaUser } from "react-icons/fa";
import { Input } from "./ui/input";

function PageHeader({ title }) {
    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-sky-200 to-blue-700 py-10">
            <h1 className="text-lg font-bold text-white px-5">{title}</h1>
            <div className="flex items-center space-x-3 px-2">
                <div className="relative rounded-full ">
                    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 ml-2 text-white" />
                    <Input className="pl-10 bg-transparent rounded-full focus:outline-none border border-white" placeholder="Search..." style={{color: 'white'}} />
                </div>
                <a href="/userprofile" className="px-4 rounded-full p-2 border border-white">
                    <FaUser className="text-white text-xl cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default PageHeader;
