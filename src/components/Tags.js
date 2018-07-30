import React, { Component } from "react";

// import VideoGallery from "./VideoGallery";
// import ReactDOM from 'react-dom';

class Tags extends React.Component {
    constructor(props) {
        super(props);

        
        
        this.checkboxChange = this.checkboxChange.bind(this);
		// this.submitZipCode = this.submitZipCode.bind(this);
    }
    
    componentDidMount() {
        const allTags = this.props.tagsArray;
        const tagsState = {};
        allTags.map(tag =>
            tagsState[tag] = true
        );
        this.setState({ tagsState });
    }

    checkboxChange(e) {
        const tagsState = this.state.tagsState;
        
        tagsState[e.target.value] = e.target.checked;

        this.setState({ tagsState });

    }
    render() {
        
        console.log("Tags.js")
       
        const allTags = this.props.tagsArray;
       
        return (
            <form className="frmTags">
                <h3>Tags:</h3>
                {allTags.map(tag =>
                    <span className="tagsCheckboxs">
                        <input type="checkbox" name={tag} value={tag} defaultChecked onChange={this.checkboxChange}/>
                        <label htmlFor={tag}>{tag}</label>
                    </span>
                )}; 
                
            </form>
        );
    }
}

export default Tags;