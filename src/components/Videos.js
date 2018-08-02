import React from "react";

class Videos extends React.Component {

    getSelectedTags() {
        const tagsState = this.props.tagsState;
        const selectedTags = [];

        Object.keys(tagsState).forEach(tag => {
            if (tagsState[tag] === true) {
                selectedTags.push(tag);
            }
        });

        return selectedTags;
    }

    renderVideo(video, selectedTags) {    
        const videoTags = video.tags;
        
        if (videoTags.length === 0) {
            videoTags.push('Other');
        }
        
        for (let i = 0; i < videoTags.length; i++) {
            if (selectedTags.indexOf(videoTags[i]) !== -1) {
                return (
                    <li className='video' key={video.id}>
                        <img
                            className='videoThumbnail'
                            src={video.thumbnail}
                            alt='video thumbnail'
                        />
                    
                        <h2>{video.name}</h2>
                        <p>{video.dateCreated}</p>
                        <p>{video.description}</p>
                        <div className='categoryAndTags'>                            
                            <span>
                                <strong>Categories:</strong> {video.category}
                            </span>                            
                            <div>
                                <strong>Tags:</strong>
                                <ul className='videoTags'>
                                    {video.tags.map(((tag, index) => 
                                        <li key={tag}>{tag}</li>))}
                                </ul>
                            </div>
                        </div>
                    </li>
                );
            }
        }
    }
    
    render() {
        const allVideos = this.props.VideosData.videosData;
        const selectedTags = this.getSelectedTags();
        
        return (
            <ul className="videosList">
                {allVideos.map((video) => 
                    this.renderVideo(video, selectedTags)
                )}
            </ul>
        );
    }
}
export default Videos;