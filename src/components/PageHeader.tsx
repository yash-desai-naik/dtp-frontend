import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function PageHeader({ title }:{title:string}) {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

    const handleProfileClick = () => {
        // Redirect to profile page
        history.push('/userprofile');
    };

    const handleLoginClick = () => {
        // Perform login actions
        setIsLoggedIn(true);
        history.push('/login');
    };

    const handleLogoutClick = () => {
        // Perform logout actions
        setIsLoggedIn(false);
        history.push('/login'); // Redirect to login page after logout
    };

    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-sky-400 to-blue-700 py-10">
            <h1 className="text-lg font-bold text-white px-5">{title}</h1>
            <div className="flex items-center space-x-3 px-2">
                <div className="relative rounded-full ">
                    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 ml-2 text-white" />
                    <Input className="pl-10 bg-transparent rounded-full focus:outline-none border border-white" placeholder="Search..." style={{ color: 'white' }} />
                </div>
                <div className="px-3 rounded-full p-1 border border-white">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <FaUser className="text-white text-xl cursor-pointer" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="shadow-sm bg-white px-1 py-1">
                            {!isLoggedIn && (
                                <DropdownMenuLabel>
                                    <Button className="flex items-center" onClick={handleLoginClick}>
                                        <FaSignInAlt className="text-black cursor-pointer" />
                                        <span className="ml-2">SignIn</span>
                                    </Button>
                                </DropdownMenuLabel>
                            )}
                            {isLoggedIn && (
                                <>
                                    <DropdownMenuLabel>
                                        <Button className="flex items-center" onClick={handleProfileClick}>
                                            <FaUser className="text-black cursor-pointer" />
                                            <span className="ml-2">User Profile</span>
                                        </Button>
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel>
                                        <Button className="flex items-center" onClick={handleLogoutClick}>
                                            <FaSignOutAlt className="text-black cursor-pointer" />
                                            <span className="ml-2">Logout</span>
                                        </Button>
                                    </DropdownMenuLabel>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
