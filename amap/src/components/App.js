import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

		constructor() {
			super();
			this.state = {
				veggies: {}
			}

			this.addVeggies = this.addVeggies.bind(this);


		}

		addVeggies() {
			const veggies = "veggies-1"
			this.setState({veggies});
		}


	render(){

		return (
				<div className="amap">
					<div className= "menu">
						<Header tagline = "les bons legumes"/>
					</div>
					<Order/>
					<Inventory addVeggies={this.addVeggies}/>
				</div>
				)
	}
}

export default App;