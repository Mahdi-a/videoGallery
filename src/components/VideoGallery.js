import React from 'react';
import VideosData from './VideosData';
import Filters from './Filters';
import Categories from './Categories';
import Tags from './Tags';
import Videos from './Videos';


class VideoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videosData: [],
            categories: [],
            allVideoCat: [],
            tags: [],
            tagsState: {}, 
            selectedCats: []
        };
        this.checkboxChange = this.checkboxChange.bind(this); 
        this.categoriesChange = this.categoriesChange.bind(this);
    }

    categoriesChange(e) {
        const catLevel = e.target.name * 1;
        const selectedCat = e.target.value;
        const selectedCats = this.state.selectedCats;
        const maxLevel = this.state.categories.length;
        
        if (catLevel < maxLevel) {
            selectedCats.splice(catLevel);
            selectedCats[catLevel] = selectedCat;
            if (selectedCat !== 'All') {
                selectedCats.push('All');
            }
        }
        this.setState({selectedCats: selectedCats});
        // console.log(maxLevel);
        // console.log('Cat level: ' + catLevel + 'Selected Cat: '+selectedCat);
        
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
            if (video.tags.length === 0 && tagLowerCase.indexOf("other") === -1) {
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

    getCategories(){
        const { videosData } = this.state.videosData;
        // const categories = {};
        let categories = this.makeCategoriesArray(videosData);
        let allVideoCat = [];
        for (let i = 0; i < videosData.length; i++){
            const catArray = videosData[i].category.split('->');
            // console.log(catArray);
            allVideoCat.push(catArray);
            
            for (let j = 0; j < catArray.length; j++){
                if (categories[j].indexOf(catArray[j]) === -1){
                    categories[j].push(catArray[j]);    
                }
            }
        }
        this.setState({ categories: categories });
        this.setState({ allVideoCat: allVideoCat });

        // console.log(allVideoCat);
        // console.log(categories);
            
            
    }
    makeCategoriesArray(videosData){
        let categoriesArray = [];
        for (let i = 0; i < videosData.length; i++){
            const catArray = videosData[i].category.split('->');
            for (let j = 0; j < catArray.length; j++){
                categoriesArray[j] = ['All'];
            }
        }
        return categoriesArray;
    }

    componentDidMount() {    
        this.getVideoTags();
        this.getTagsState();
        this.getCategories();
        console.log(React.Children.count());

    }

    render() { 
        return(
            <div className="app">
                <Filters/>
                <Categories
                    categories={this.state.categories}
                    allVideoCat={this.state.allVideoCat}
                    onChange={this.categoriesChange}
                />
                <Tags
                    tagsArray={this.state.tags}
                    onChange={this.checkboxChange} 
                    tagsState={this.state.tagsState}
                />
                <Videos
                    VideosData={this.state.videosData}
                    tagsState={this.state.tagsState} 
                    selectedCats={this.state.selectedCats}
                />
            </div>
        );  
    }
}

export default VideoGallery;