import React from "react";

const VideoCard = ({ title, image, thumbnail, views, username }) => {
    return (
        <div className="relative">
            <div className="bg-black m-2">
                <img
                    src={thumbnail || ""}
                    className="aspect-video cursor-pointer rounded-lg object-cover"
                    alt=""
                />
                <div className="flex mt-1.5">
                    <div>
                        <img
                            src={image || ""}
                            className="rounded-full m-1.5 mt-2 mr-3 flex items-baseline w-8 h-8 object-cover"
                            alt=""
                        />
                    </div>
                    <div className="px-1.5 text-white mt-1">
                        <div className="text-[17px] font-extrabold w-full cursor-pointer">
                            {title.substring(0, 100)}
                        </div>
                        <div className="text-[14px] font-semibold text-gray-500 flex gap-1 items-center cursor-pointer">
                            {username.substring(0, 30)}
                        </div>
                        <div className="text-sm mb-1 text-gray-500 font-semibold cursor-pointer">
                            {views} views
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
