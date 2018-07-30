import React, { Component } from "react";

class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.checkboxChange = this.checkboxChange.bind(this);
    }

    checkboxChange(e) {
        
        const { onChange } = this.props;
        
        onChange(e);        
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