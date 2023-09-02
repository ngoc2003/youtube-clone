import { Link, Head } from "@inertiajs/react";
import NavLayout from "@/Layouts/NavLayout";
import SideContentLayout from "@/Layouts/SideContentLayout";
import VideoCard from "@/Components/VideoCard";
import LayoutDefault from "@/Layouts/LayoutDefault";

export default function Welcome({ auth, laravelVersion, phpVersion, videos }) {
    return (
        <LayoutDefault>
            <div className="ml-2 grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {videos?.length &&
                    videos.map((video) => (
                        <Link
                            key={video.id}
                            href={route("videos.show", { id: video.id })}
                        >
                            <VideoCard
                                image={video.thumbnail}
                                title={video.title}
                                username={video.user}
                                views={video.views}
                                thumbnail={video.thumbnail}
                            />
                        </Link>
                    ))}
            </div>
        </LayoutDefault>
    );
}
