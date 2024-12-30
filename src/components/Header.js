import { useDispatch, useSelector } from "react-redux";
import {HAMBURGER_ICON, USER_ICON, YOUTUBE_SEARCH_API, YT_LOGO }from "../utils/constants"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () =>{

    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=> store.search);

    useEffect(()=>{
        // API call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        } , 200);

        return () =>{
            clearTimeout(timer);
        };

        // make an api call after every key press
        //  but if the difference between 2 api calls is <200ms
        // decline the api call


    },[searchQuery]);

    const getSearchSuggestions = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);
        dispatch(cacheResults(
            {[searchQuery] : json[1]},
        ));
    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }


    const [activeIndex, setActiveIndex] = useState(-1);

const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
        setSearchQuery(suggestions[activeIndex]);
        setShowSuggestions(false);
    }
};



    return(
        <div className="grid grid-flow-col p-2 m-2 shadow-lg items-center ">

        <div className="flex gap-5 col-span-1">
        <img src= {HAMBURGER_ICON} alt="menu-icon" onClick={()=> toggleMenuHandler()}className="w-[30px] h-[30px] mt-[15px] cursor-pointer"/>
        <img src= {YT_LOGO} alt="ytLogo-icon"  className="w-[120px] h-15 "/>    
        </div>    
        
        <div>
        <div className="col-span-10 text-center">
        <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onKeyDown={handleKeyDown}  // Add this
    className=" px-2 w-[300px] h-9 border border-gray-500 outline-none rounded-l-full"
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
/>
            <button className="border border-gray-500 p-[5px] rounded-r-full border-l-0">Search</button>
        </div>

        {showSuggestions && (
    <div className="absolute bg-white mt-2 ml-[9rem] w-[292px] rounded-lg shadow">
        <ul className="py-3 px-8">
            {suggestions.map((suggestion, index) => (
                <li
                    key={suggestion}
                    className={`pb-2 pt-2 hover:bg-gray-50 rounded-lg pl-4 ${index === activeIndex ? "bg-gray-100" : ""}`}
                >
                    {suggestion}
                </li>
            ))}
        </ul>
    </div>
)}

        </div>

        <div className="col-span-1 ">
            <img src={USER_ICON} alt="uer-icon" className="w-10 h-10 rounded-full float-end mr-10 "/>
        </div>

        </div>

        
    )
};

export default Header;