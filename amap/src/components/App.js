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

		addVeggies(veggie) {
			const veggies = {...this.state.veggies};
			//this.setState({veggies});

			const timeStamp = Date.now();
			veggies['veggie-$(timeStamp'] = veggie;

			veggies["veggie-1"] = veggie;
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