import { SetStateAction, useState } from "react";
import { FaChartBar, FaCheckCircle, FaHistory, FaUser, FaUsers } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

export const SidebarItems = () => {
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState(getSelectedItem(location.pathname));

    function getSelectedItem(pathname: string) {
        if (pathname === "/dashboard") return "dashboard";
        if (pathname === "/admin") return "admin";
        if (pathname === "/organizations") return "organizations";
        if (pathname === "/contracthistory") return "contractHistory";
        if (pathname === "/verify") return "verify";
        return null;
    }

    const handleItemClick = (itemName: SetStateAction<string | null>) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="bg-white p-0">
            <div className={`py-4 pl-8 hover:bg-blue-100 hover:pl-4 ${selectedItem === 'dashboard' ? 'font-bold' : ''}`}>
                <Link to="/dashboard" onClick={() => handleItemClick('dashboard')}><span className='flex items-center gap-3'><FaChartBar /> Dashboard</span></Link>
            </div>
            <div className={`py-4 pl-8 hover:bg-blue-100 hover:pl-4 ${selectedItem === 'admin' ? 'font-bold' : ''}`}>
                <Link to="/admin" onClick={() => handleItemClick('admin')}><span className='flex items-center gap-3'><FaUser /> Admin</span></Link>
            </div>
            <div className={`py-4 pl-8 hover:bg-blue-100 hover:pl-4 ${selectedItem === 'organizations' ? 'font-bold' : ''}`}>
                <Link to="/organizations" onClick={() => handleItemClick('organizations')}><span className='flex items-center gap-3'><FaUsers /> Organizations</span></Link>
            </div>
            <div className={`py-4 pl-8 hover:bg-blue-100 hover:pl-4 ${selectedItem === 'contractHistory' ? 'font-bold' : ''}`}>
                <Link to="/contracthistory" onClick={() => handleItemClick('contractHistory')}><span className='flex items-center gap-3'><FaHistory /> Contract History</span></Link>        
            </div>
            <div className={`py-4 pl-8 hover:bg-blue-100 hover:pl-4 ${selectedItem === 'verify' ? 'font-bold' : ''}`}>
                <Link to="/verify" onClick={() => handleItemClick('verify')}><span className='flex items-center gap-3'><FaCheckCircle/> Verify </span></Link>        
            </div>
        </div>
    );
};
