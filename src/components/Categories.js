import React from 'react';

class Categories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			allOptions: [],
			selectedValue: []
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
		let selectedValue = this.state.selectedValue;
		
		if (catLevel < allOptions.length) {
			
			allOptions.splice(catLevel);
			selectedValue.splice(catLevel);
			
			selectedValue[catLevel] = selectedCat;
			selectedValue.push('All');
			
			this.setState({ selectedValue: selectedValue });
			this.setState({ allOptions: allOptions });

		} else {
			let selectedValue = this.state.selectedValue;
			selectedValue[catLevel] = selectedCat;
			this.setState({ selectedValue: selectedValue });
		}
		if (catLevel + 1 < maxLevel) {
			
			if (selectedCat !== 'All') {
				
				for (let i = 0; i < allCats.length; i++){
					
					const videoCats = allCats[i];
					
					for (let j = 0; j < videoCats.length; j++){
					
						if (videoCats[catLevel] === selectedCat && videoCats.length > (catLevel+1) && options.indexOf(videoCats[catLevel+1]) === -1) {
							options.push(videoCats[catLevel+1]);
						}
					}
				}
				allOptions[catLevel] = options;
			}
		}
		this.setState({ allOptions: allOptions });
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
						value={this.state.selectedValue[index + 1]}>
						
						{option.map(o => <option value={o}>{o}</option>)}

					</select>
				)}
			</form>
		);
	}
}

export default Categories;

