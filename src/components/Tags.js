import React from "react";

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
        const allTags = this.props.tagsArray;

        return (
            <form className="frmTags">
                <h3>Tags:</h3>
                {allTags.map((tag, index) =>
                    <span className="tagsCheckboxs" key={index}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            key={tag}
                            name={tag}
                            value={tag}
                            defaultChecked
                            onChange={this.checkboxChange}     
                        />
                        <label htmlFor={tag}>{tag}</label>
                    </span>
                )} 
            </form>
        );
    }
}

export default Tags;