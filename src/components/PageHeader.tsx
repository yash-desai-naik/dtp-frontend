import { useHistory } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useStore } from '@/store/useStore';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';

function PageHeader({ title }: { title: string }) {
    const history = useHistory();
    const isLoggedIn = useStore(state => state.isLoggedIn);
    const login = useStore(state => state.login);
    const logout = useStore(state => state.logout);

    const handleProfileClick = () => {
        // Redirect to profile page
        <a href="#"></a>
    };

    const handleLoginClick = () => {
        // Perform login actions
        login('example@email.com', 'password');
    };

    const handleLogoutClick = () => {
        // Perform logout actions
        logout();
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
                    {isLoggedIn && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-2">
                                    <FaUser className="text-white text-xl cursor-pointer" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="shadow-sm bg-white px-1 py-1">
                                <DropdownMenuLabel>
                                    <Button className="flex hover:bg-blue-100 w-full" onClick={handleProfileClick}>
                                        <FaUser className="text-black cursor-pointer" />
                                        <span className="ml-2">Profile</span>
                                    </Button>
                                </DropdownMenuLabel>
                                <DropdownMenuLabel>
                                    <Button className="flex hover:bg-blue-100 w-full" onClick={handleLogoutClick}>
                                        <FaSignOutAlt className="text-black cursor-pointer" />
                                        <span className="ml-2">Logout</span>
                                    </Button>
                                </DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                    {!isLoggedIn && (
                        <Button variant="ghost" className="h-8 w-8 p-0" onClick={handleLoginClick}>
                            <FaSignInAlt className="text-white text-xl cursor-pointer" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
