import { Link } from "react-router-dom";

export const SidebarItems = () =>
    <>
        <div className="py-4">
            <Link to="/" >Home</Link>
        </div>
        <div className="py-4">
            <Link to="/about" >About</Link>
        </div>
        <div className="py-4">
            <Link to="/topics" >Topic</Link>        
        </div>
    </>
