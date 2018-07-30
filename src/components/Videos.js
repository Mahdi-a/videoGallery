import React, {Component} from "react";

class Videos extends Component {

    componentDidMount() {
    }
    
    render() {
        
        console.log("Videos.js")
        const allVideos = this.props.VideosData.videosData;
        
        return (
            <ul className="Videos">
                {allVideos.map((video) =>
                    <li
                        key={video.id}
                        name={video.name}
                        category={video.category.split("->")}
                        tags={video.tags}
                        className='video'
                        >
                        <img
                            className='videoThumbnail'
                            src={video.thumbnail}
                            alt='video thumbnail'
                        />
                        <h2>{video.name}</h2>
                        <p>{video.dateCreated}</p>
                        <p>{video.description}</p>
                        <p>{video.category}</p>
                        <ul>
                            {video.tags.map(((tag, index) => <li key={index}>{tag}</li>))}  
                        </ul>
                        
                    </li>
                
                )}
            </ul>
        );
    }
}
export default Videos;