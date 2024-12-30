import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () =>{

    const  [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

    return(
        <div className="flex flex-col w-full">
        <div className="ml-3 mt-3 flex">

        <div>   
        <iframe className="w-[900px] h-[500px]" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div><LiveChat/></div>

        </div>

        <CommentsContainer/>
        </div>
    );
};

export default WatchPage;