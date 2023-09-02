import NavLayout from "@/Layouts/NavLayout";
import React from "react";
import RecommendVideos from "@/Components/RecommendVideos";
import LayoutDefault from "@/Layouts/LayoutDefault";

const Video = ({ video, comments, recommendVideos }) => {
    return (
        <LayoutDefault>
            <div className="xl:flex">
                <div className="p-3 flex-1">
                    <video src={video.video} controls autoPlay></video>
                    <div className="text-white text-2xl font-bold mt-4">
                        {video.title}
                    </div>
                    <div className="flex items-center mb-4">
                        <img
                            src={video.thumbnail}
                            className="rounded-full m-1.5 mt-2 mr-3 flex items-baseline w-8 h-8 object-cover"
                            alt=""
                        />
                        <div className="pl-2 text-white mt-1">
                            <div className="text-lg font-semibold flex items-center">
                                {video.user}
                            </div>
                            <div className="text-sm text-gray-500 font-semibold">
                                {video.views} views
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#3f3f3f] bg-opacity-40 rounded-lg p-3 text-white">
                        <div className="text-white text-sm font-semibold mb-2">
                            {video.views} views - 3 days ago
                        </div>
                        <div className="text-sm font-extrabold mb-2 text-blue-500">
                            {video.title}
                        </div>
                        <div className="text-sm font-extrabold mb-2">
                            Lorem ipsum
                        </div>
                        <div className="text-sm font-extrabold">
                            Lorem ipsum
                        </div>
                    </div>

                    <div className="w-[500px] p-3 block mt-10 sm:hidden ">
                        {recommendVideos.map((item) => (
                            <RecommendVideos
                                key={item.id}
                                vid={{
                                    id: item.id,
                                    user: item.user,
                                    views: item.views,
                                    title: item.title,
                                    thumbnail: item.thumbnail,
                                }}
                            />
                        ))}
                    </div>

                    <div className="mt-6">
                        <div className="text-white font-extrabold">
                            {comments.length} comments
                        </div>
                        {comments.map((comment) => (
                            <div
                                key={comment.key}
                                className="flex items-start mb-4 mt-2"
                            >
                                <img
                                    src={video.thumbnail}
                                    className="rounded-full m-1.5 mt-2 mr-3 flex items-baseline w-8 h-8 object-cover"
                                    alt=""
                                />
                                <div className="pl-6 mt-1 text-sm">
                                    <div className="text-white font-bold flex items-baseline">
                                        {comment.user}
                                        <div className="text-gray-400 pl-3">
                                            3 days ago
                                        </div>
                                    </div>
                                    <div className="text-gray-200">
                                        {comment.text}
                                    </div>
                                    <div className="flex mt-4 iterms-center text-white">
                                        <span className="material-symbols-outlined text-sm pr-2">
                                            thumb_up
                                        </span>
                                        <div className="text-gray-400 text-sm font-extrabold pr-10">
                                            {(Math.random() * 100).toFixed(0)}
                                        </div>
                                        <span className="material-symbols-outlined text-sm">
                                            thumb_down
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[500px] p-3 sm:block hidden ">
                    {recommendVideos.map((item) => (
                        <RecommendVideos
                            key={item.id}
                            vid={{
                                id: item.id,
                                user: item.user,
                                views: item.views,
                                title: item.title,
                                thumbnail: item.thumbnail,
                            }}
                        />
                    ))}
                </div>
            </div>
        </LayoutDefault>
    );
};

export default Video;
