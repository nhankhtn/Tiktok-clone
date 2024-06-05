import Video from "~/components/Video";
import images from "~/assets/images";
import { useEffect, useState } from "react";


function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, [])

    return <main>
        {
            videos.map(video => (
                <Video
                    key={video.id}
                    id={video.id}
                    src={video.url}
                    title={video.title}
                    description={video.description}
                    avatar={images.avatar}
                    favorites={video.saves}
                    likes={video.likes}
                    comments={video.comments}
                    shares={video.shares}
                    onFollow={() => { }}
                    onComment={() => { }}
                    onFavorite={() => { }}
                    onShare={() => { }}
                />
            ))
        }
    </main>
}

export default Home;
