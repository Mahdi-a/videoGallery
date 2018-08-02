import React from "react";

class Categories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			test: []
		};
	}
	renderCats(cats, index){
		console.log(cats);
		for(let i =0; i < cats.length; i++){
			return (<select index={index}>{cats.map(cat => <option>{cat}</option>)}</select>);
		}
	}

	componentDidMount() {
		this.setState({ test: <h3>test</h3> });
	}

	render(){
		const allCats = this.props.categories;
		console.log(allCats);

		const test = this.state.test;
		return(
			<form className="frmCategories">
				<h3>Categories:</h3>
				{allCats.map((cats, index) =>

					this.renderCats(cats, index))}
				{test}
			</form>

		);
	}
}

export default Categories;

