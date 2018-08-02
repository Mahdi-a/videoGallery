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

	// componentDidMount() {
	// 	this.setState({ test: <h3>test</h3> });
	// }

	mainCatChange(e) {
		const catLevel = e.target.name;
		console.log(catLevel);

		
	}

	categoriesChange(e) {
		
		const { onChange } = this.props;
		// console.log(catLevel);
		// console.log(selectedCat);
		this.updateCategoryFilters(e);
		
		
		onChange(e);
	}

	updateCategoryFilters(e) {
		// debugger;
		const catLevel = e.target.name * 1;
		const selectedCat = e.target.value;
		const allCats = this.props.allVideoCat;
		const maxLevel = this.props.categories.length;
		let allOptions = this.state.allOptions;
		let options = ['All'];
		// console.log(maxLevel);
		// console.log(catLevel);
		// console.log(allOptions.length);
		// console.log(selectedCat);
		let selectedValue = this.state.selectedValue;
		// selectedValue[catLevel] = selectedCat;
		// this.setState({ selectedValue: selectedValue });
		// this.setState({ selectedValue: selectedCat });
		if (catLevel < allOptions.length) {
			console.log(catLevel);
			console.log(selectedCat);
			
			allOptions.splice(catLevel);
			selectedValue.splice(catLevel);
			selectedValue[catLevel] = selectedCat;
			selectedValue.push('All');
			this.setState({ selectedValue: selectedValue });
			this.setState({ allOptions: allOptions });

			// this.setState({ selectedValue: 'All' });
			// catLevel = catLevel - 1;
			// this.setState({ allOptions: allOptions });
			console.log(allOptions);

			
		} else {
			let selectedValue = this.state.selectedValue;
			selectedValue[catLevel] = selectedCat;
			this.setState({ selectedValue: selectedValue });
		}
		if (catLevel + 1 < maxLevel) {
			// console.log('1');
			// console.log(selectedCat);
			if (selectedCat !== 'All') {
				// console.log('2');
				
				for (let i = 0; i < allCats.length; i++){
					
					const videoCats = allCats[i];
					// console.log(videoCats);
					for (let j = 0; j < videoCats.length; j++){
						// console.log(videoCats[catLevel]);
						// console.log(selectedCat);
						if (videoCats[catLevel] === selectedCat && videoCats.length > (catLevel+1) && options.indexOf(videoCats[catLevel+1]) === -1) {
							options.push(videoCats[catLevel+1]);
							// console.log('3');
							// console.log(videoCats[catLevel + 1]);
						}
					}
				}
				// console.log(options);
				allOptions[catLevel] = options;
				// allOptions.push(options);
				// this.setState({
				// 	a: <select onChange={this.categoriesChange} name='1'>
				// 		{options.map(o => <option value={o}>{o}</option>
				// 		)}
				// 	</select>
					
				// });	
			}
		}
		this.setState({ allOptions: allOptions });
		// console.log(allOptions);
		
		if (catLevel === '1' && selectedCat !== 'All') {
			// let options
			
		}
	}

	render(){
		const allCats = this.props.categories;
		// console.log(allCats[0]);
		let mainCat = [];
		if (allCats.length > 0) {
			mainCat = allCats[0];	
		}
		const allOptions = this.state.allOptions;
		// console.log(allOptions);	

		// const test = this.state;
		// console.log(test);
		// console.log(Object.keys(test));
		// debugger;
		return(
			<form className='frmCategories'>
				<h3>Categories:</h3>
				<select onChange={this.categoriesChange} name='0'>
					{mainCat.map(cat => <option value={cat}>{cat}</option>)}
					{/* {this.state} */}
				</select>
				{console.log(this.state.allOptions)}
				{this.state.allOptions.map((option, index) => 
					<select onChange={this.categoriesChange} name={index + 1} value={this.state.selectedValue[index+1]}>
						{/* <option>{o}</option> */}
						{option.map(o => <option value={o}>{o}</option>)}
					</select>
				)
				}
					
				{/* {Object.values(this.state).map(a => a)} */}
			</form>

		);
	}
}

export default Categories;

