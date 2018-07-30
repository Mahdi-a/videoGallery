import React from 'react';

class Filters extends React.Component {


    submitFilter(e) {

        console.log(e);
        
    }
    render() {
        return (
            <div className='filters'>
                <form>
                    <label htmlFor='filter'>Filter By:</label>
                    <select onChange={this.submitFilter}>
                        <option value='noFilter'>No Filter</option>
                        <option value='filterByTag'>Tag</option>
                        <option value='filterByCategory'>Category</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Filters;