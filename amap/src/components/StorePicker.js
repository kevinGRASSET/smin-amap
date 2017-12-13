import React from 'react';
import PropTypes from 'prop-types'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		event.preventDefault();
		//history.push(location)
		const storeId = this.storeInput.value;
		console.log('on va vers  ${storeId}');
		//const value = $('input').val()

		// on recupere le texte entré dans le formulaire

		this.props.history.push('store/${storeInput}')
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}> 
				<h2>Entrer un nom de magasin</h2>
				<input type="text" ref={(input) => {this.storeInput = input}}  required placeholder="Nom du magasin" defaultValue = {getFunName()}/>
				<button type="submit">Visiter le magasin </button>
			</form>
			)
	}
}


	StorePicker.contextTypes = {
		router: PropTypes.object

	}

export default StorePicker;