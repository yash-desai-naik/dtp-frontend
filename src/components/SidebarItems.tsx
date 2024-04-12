import { faChartBar, faHistory, faHome, faUser, faUserShield, faUsers, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SetStateAction, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarItems = () => {
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState(getSelectedItem(location.pathname));

    function getSelectedItem(pathname: string) {
        if (pathname === "/") return "home";
        if (pathname === "/about") return "about";
        if (pathname === "/dashboard") return "dashboard";
        if (pathname === "/admin") return "admin";
        if (pathname === "/organizations") return "organizations";
        if (pathname === "/contracthistory") return "contractHistory";
        if (pathname === "/userprofile") return "userProfile";
        return null;
    }

    const handleItemClick = (itemName: SetStateAction<string | null>) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="bg-white px-5">
            <div className={`py-4 ${selectedItem === 'home' ? 'font-bold' : ''}`}>
                <Link to="/home" onClick={() => handleItemClick('home')}><FontAwesomeIcon icon={faHome} className="px-5" /> Home</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'dashboard' ? 'font-bold' : ''}`}>
                <Link to="/dashboard" onClick={() => handleItemClick('dashboard')}><FontAwesomeIcon icon={faChartBar} className="px-5" /> Dashboard</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'admin' ? 'font-bold' : ''}`}>
                <Link to="/admin" onClick={() => handleItemClick('admin')}><FontAwesomeIcon icon={faUserShield} className="px-5" /> Admin</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'organizations' ? 'font-bold' : ''}`}>
                <Link to="/organizations" onClick={() => handleItemClick('organizations')}><FontAwesomeIcon icon={faUsers} className="px-5" /> Organizations</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'contractHistory' ? 'font-bold' : ''}`}>
                <Link to="/contracthistory" onClick={() => handleItemClick('contractHistory')}><FontAwesomeIcon icon={faHistory} className="px-5" /> Contract History</Link>        
            </div>
            <div className={`py-4 ${selectedItem === 'userProfile' ? 'font-bold' : ''}`}>
                <Link to="/userprofile" onClick={() => handleItemClick('userProfile')}><FontAwesomeIcon icon={faUser} className="px-5" /> User Profile</Link>        
            </div>
            <div className={`py-4 ${selectedItem === 'about' ? 'font-bold' : ''}`}>
                <Link to="/about" onClick={() => handleItemClick('about')}><FontAwesomeIcon icon={faInfoCircle} className="px-5" /> About </Link>        
            </div>
        </div>
    );
};
