import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import VideosData from './VideosData';
// import VideosData from './VideosData.js';
// import videosList from "../database/videos.js";
import VideosData from './VideosData';
import Filters from './Filters';
import Videos from './Videos';
import Tags from './Tags';

class VideoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videosData: []
        };
        // this.checkboxChange = this.checkboxChange.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
        
    }

    // checkboxChange(e) {
    //     console.log("e.target.checked");
    // }

    componentWillMount() {
        // const data = {
        //     videos: window.videos, function (video) {
        //         return JSON.stringify(video);
        //     }
        // };
        
        // const videosData = data.videos;
        const videosData = VideosData;
        this.setState({ videosData });
        this.getVideoTags();
        
        
    }



    getVideoTags() {
        console.log("getTags");
        // console.log(this.state);
        const { videosData } = VideosData;
        let tagLowerCase = [];
        let tags = [];
        // const ttt = data.find(w => w.id == 162702);
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
        // console.log(tags);
        
    }

    getTagsState(e) {
        console.log("Get tagsState");
        
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
        
        // const test = videosData.find(w => w.id == 162702);
        // console.log(test);
        
    }

    // componentDidMount() {       
    // }

    render() { 
        
        return(
        <div className="app">
                <h1>Hello</h1>
                <Filters/>
                <Tags tagsArray={this.state.tags} />
                <Videos VideosData = {this.state.videosData}/>
        </div>);
        
    }
}

VideoGallery.propTypes = {
	
	onChange: PropTypes.func
};

export default VideoGallery;