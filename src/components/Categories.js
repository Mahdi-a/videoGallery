import React from 'react';

class Categories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			allOptions: [],
			selectedCats: []
		};
		
		this.categoriesChange = this.categoriesChange.bind(this);
	}
	renderCats(cats, index){
		console.log(cats);
		for(let i =0; i < cats.length; i++){
			return (<select index={index}>{cats.map(cat => <option>{cat}</option>)}</select>);
		}
	}

	categoriesChange(e) {
		const { onChange } = this.props;
		this.updateCategoryFilters(e);
		onChange(e);
	}

	updateCategoryFilters(e) {
	
		const catLevel = e.target.name * 1;
		const selectedCat = e.target.value;
		const allCats = this.props.allVideoCat;
		const maxLevel = this.props.categories.length;
		
		let allOptions = this.state.allOptions;
		let options = ['All'];
		let selectedCats = this.state.selectedCats;
		// debugger;
		if (catLevel < allOptions.length) {
			
			allOptions.splice(catLevel);
			selectedCats.splice(catLevel);
			
			selectedCats[catLevel] = selectedCat;
			
			if (selectedCat !== 'All'){
				selectedCats.push('All');	
			}
			
			
			this.setState({ selectedCats: selectedCats });
			this.setState({ allOptions: allOptions });

		} else {
			let selectedCats = this.state.selectedCats;
			selectedCats[catLevel] = selectedCat;
			this.setState({ selectedCats: selectedCats });
		}
		if (catLevel + 1 < maxLevel) {
			
			if (selectedCat !== 'All') {
				
				for (let i = 0; i < allCats.length; i++){
					
					const videoCats = allCats[i];

					let catsParent = this.checkCats(videoCats, selectedCats);
					
					for (let j = 0; j < videoCats.length; j++ ){
						
						if (catsParent && videoCats[catLevel] === selectedCat && videoCats.length > catLevel+1 && options.indexOf(videoCats[catLevel+1]) === -1) {
							options.push(videoCats[catLevel+1]);
							// console.log(videoCats[catLevel+1]);
						}
					}
				}
				allOptions[catLevel] = options;
			}
		}
		this.setState({ allOptions: allOptions });
	}
	checkCats(videoCats, selectedCats){
		let counter = 0;
		for(let i = 0, length1 = videoCats.length; i < length1; i++){
			if (videoCats[i] === selectedCats[i] || selectedCats[i] === 'All'){
				counter++;
			}
		}
		if (counter === selectedCats.length){
			return true;
		} else {
			return false;
		}
	}

	render(){
		const allCats = this.props.categories;
		
		let mainCat = [];
		
		if (allCats.length > 0) {
			mainCat = allCats[0];	
		}
		const allOptions = this.state.allOptions;
		
		return(
			<form className='frmCategories'>
				<h3>Categories:</h3>
				<select onChange={this.categoriesChange} name='0'>
					{mainCat.map(cat => <option value={cat}>{cat}</option>)}
				</select>

				{this.state.allOptions.map((option, index) =>
					<select
						onChange={this.categoriesChange}
						name={index + 1}
						value={this.state.selectedCats[index + 1]}>
						
						{option.map(o => <option value={o}>{o}</option>)}

					</select>
				)}
			</form>
		);
	}
}

export default Categories;

