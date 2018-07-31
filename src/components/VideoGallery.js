import React, { Component } from 'react';
import VideosData from './VideosData';
import Filters from './Filters';
import Videos from './Videos';
import Tags from './Tags';

class VideoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videosData: [],
            tags: [],
            tagsState: {}
        };
        
        this.checkboxChange = this.checkboxChange.bind(this);        
    }

    checkboxChange(e) {

        const tagsState = this.state.tagsState;
        
        tagsState[e.target.value] = e.target.checked;

        this.setState({ tagsState });
    }

    componentWillMount() {

        const videosData = VideosData;
        this.setState({ videosData });
        this.getVideoTags();
    }

    getVideoTags() {
        
        const { videosData } = VideosData;
        let tagLowerCase = [];
        let tags = [];
        
        videosData.map(function (video) {
            if (video.tags.length == 0 && tagLowerCase.indexOf("other") === -1) {
                tagLowerCase.push("other");
                tags.push("Other");
            } else {
                for (let i = 0; i < video.tags.length; i++){
                    if (tagLowerCase.indexOf(video.tags[i].toLowerCase()) === -1) {
                        tagLowerCase.push(video.tags[i].toLowerCase());
                        
                        tags.push(video.tags[i]);
                    }
                }
            }
            
        }); 
        this.setState({ tags: tags });
    }

    getTagsState(e) {

        const allTags = this.state.tags;
        const tagsState = {};
        allTags.map(tag =>
            tagsState[tag] = true
        );
        this.setState({ tagsState });
    }

    componentDidMount() {
        
        this.getVideoTags();
        this.getTagsState();
    }

    render() { 

        return(
            <div className="app">
                <Filters/>
                <Tags
                    tagsArray={this.state.tags}
                    onChange={this.checkboxChange} 
                />
                <Videos
                    VideosData={this.state.videosData}
                    tagsState={this.state.tagsState} 
                />
            </div>
        );  
    }
}

export default VideoGallery;