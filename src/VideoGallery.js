import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import videosList from "./database/videos.js";

class VideoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videosData: []
        };
        
    }

    componentWillMount() {
        const data = {
            videos: window.videos, function (video) {
                // return JSON.stringify(video);
            }
        };
        
        const videosData = data.videos;
        this.setState({ videosData });
    }

    componentDidMount() {

        console.log("componentDidMount");
        this.searchState();
    }

    searchState() {
        console.log("Starting searching state");
        const { videosData } = this.state;
        // const test = videosData.find(w => w.id == 162702);        
    }

    render() {        
        return (
            <h1>Hello</h1>
        )
    }
}

export default VideoGallery