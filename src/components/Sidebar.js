import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // early return pattern
    if(!isMenuOpen) return null;

    return(
        <div className="w-[12rem] ">

            <ul className="p-3">
                <li className="pt-3"><Link to={"/"}>Home</Link></li>
                <li className="pt-3">Shorts</li>
                <li className="pt-3">Videos</li>
                <li className="pt-3">Live</li>
            </ul>

            <h1 className="p-2 font-bold text-lg">Subscriptions</h1>
            <ul className="p-3">
                <li className="">Music</li>
                <li className="pt-3">Sports</li>
                <li className="pt-3">Gaming</li>
                <li className="pt-3">Movies</li>
            </ul>

            <h1 className="p-2 font-bold text-lg">Watch Later</h1>
            <ul className="p-3">
                <li>History</li>
                <li className="pt-3">Playlists</li>
                <li className="pt-3">Your Courses</li>
                <li className="pt-3">Liked Videos</li>
            </ul>
        </div>
    );
};

export default Sidebar;