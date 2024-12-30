

const VideoCard = ({info}) =>{
    // console.log(info);

    const {snippet, statistics} = info;
    const {channelTitle, localized, thumbnails} = snippet;


    return(
        <div className="p-2 m-2 w-72 shadow-lg cursor-pointer hover:bg-gray-200">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold pt-3 pb-1">{localized.title}</li>
        <li className="text-gray-500 font-semibold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
    );
};

// Higher Order Compoenet
export const AdVideoCard = (VideoCard) =>{
    return <div></div>
}

export default VideoCard;