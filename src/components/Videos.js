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

    checkCategories(selectedCats, videoCats) {
        console.log(selectedCats);
        console.log(videoCats); 
        let counter = 0;
        if (selectedCats.length === 0 || selectedCats[0] === 'All') {
            // console.log('true');
            return true;
        } else {
            
            for (let i = 0; i < selectedCats.length; i++){
                if (selectedCats[i] === videoCats[i] || selectedCats[i] === 'All') {
                    counter++;
                }
            }
            if (counter === selectedCats.length){
                // console.log('TRUE');
                return true;
            } else {
                // console.log('FALSE');
                return false;
            }
            // console.log(counter);
        }
        // this.setState({catIndex: catIndex});
    }

    renderVideo(video, selectedCats, selectedTags) {   
        
        const videoTags = video.tags;
        const videoCats = video.category.split('->');
        
        this.checkCategories(selectedCats, videoCats);
        // const test = this.checkCategories(selectedCats, videoCats);
        // console.log(test);
        if (this.checkCategories(selectedCats, videoCats)){
            
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
    }
    
    render() {
        const allVideos = this.props.VideosData.videosData;
        const selectedTags = this.getSelectedTags();
        const selectedCats = this.props.selectedCats;
        
        return (
            <ul className="videosList">
                {allVideos.map((video) => 
                    this.renderVideo(video, selectedCats, selectedTags)
                )}
            </ul>
        );
    }
}
export default Videos;