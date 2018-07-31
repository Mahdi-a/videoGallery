import React, { Component } from "react";

class Videos extends React.Component {
    constructor(props) {
        super(props);
    }

    getSelectedTags() {
        const tagsState = this.props.tagsState;

        const selectedTags = [];

        Object.keys(tagsState).forEach(tag => {
            if (tagsState[tag] == true) {
                selectedTags.push(tag);
            }
        });

        return selectedTags;
    }
    renderVideo(video, selectedTags) {
        
        const videoTags = video.tags;
        
        if (videoTags.length == 0) {
            videoTags.push('Other');
        }
        
        for (let i = 0; i < videoTags.length; i++) {
            if (selectedTags.indexOf(videoTags[i]) != -1) {
                return <li
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
                    <h3>Categories:</h3>
                    <p>{video.category}</p>
                    <h3>Tags:</h3>
                <ul>
                    {video.tags.map(((tag, index) => <li key={index}>{tag}</li>))}
                </ul>
            </li>;
            }
        }
    }
    
    render() {
        console.log("Videos.js")
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