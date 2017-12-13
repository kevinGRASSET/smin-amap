import React from 'react';
import AddVergieForm from './AddVergieForm'

class Inventory extends React.Component {
	render(){

		return (
				<div>
					<p>Inventory</p>
					<AddVergieForm addVeggies={this.props.addVeggies}/>

				</div>
			
			)
				
	}
}
export default Inventory;