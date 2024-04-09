import { faChartBar, faHistory, faHome, faUser, faUserShield, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SetStateAction, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarItems = () => {
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState(getSelectedItem(location.pathname));

    function getSelectedItem(pathname: string) {
        if (pathname === "/") return "home";
        if (pathname === "/Dashboard") return "dashboard";
        if (pathname === "/admin") return "admin";
        if (pathname === "/Organizations") return "organizations";
        if (pathname === "/Contract History") return "contractHistory";
        if (pathname === "/User Profile") return "userProfile";
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
                <Link to="/Dashboard" onClick={() => handleItemClick('dashboard')}><FontAwesomeIcon icon={faChartBar} className="px-5" /> Dashboard</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'admin' ? 'font-bold' : ''}`}>
                <Link to="/admin" onClick={() => handleItemClick('admin')}><FontAwesomeIcon icon={faUserShield} className="px-5" /> Admin</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'organizations' ? 'font-bold' : ''}`}>
                <Link to="/Organizations" onClick={() => handleItemClick('organizations')}><FontAwesomeIcon icon={faUsers} className="px-5" /> Organizations</Link>
            </div>
            <div className={`py-4 ${selectedItem === 'contractHistory' ? 'font-bold' : ''}`}>
                <Link to="/Contract History" onClick={() => handleItemClick('contractHistory')}><FontAwesomeIcon icon={faHistory} className="px-5" /> Contract History</Link>        
            </div>
            <div className={`py-4 ${selectedItem === 'userProfile' ? 'font-bold' : ''}`}>
                <Link to="/User Profile" onClick={() => handleItemClick('userProfile')}><FontAwesomeIcon icon={faUser} className="px-5" /> User Profile</Link>        
            </div>
        </div>
    );
};
