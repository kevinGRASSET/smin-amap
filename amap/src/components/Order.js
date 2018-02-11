import React from 'react';
import { formatPrice } from '../helpers.js';

class Order extends React.Component {

	constructor(){
		super()
		this.state = {
			total: 0,
			nbTotal: 0,
		}
	}

	createOrder(veggie) {
    const order = {
    	name: veggie.name,
      image: veggie.image,
      price: veggie.price,
      nombreProduits: 1,
      nombreProduitDispo: veggie.nombreProduitDispo,
      prixFinal: veggie.price,
    }
    this.props.addOrder(order);
  }

  	render() {
  		if (typeof this.props.details != "undefined" && this.props.details != 0 ){
  			var that = this;
  			var nombreProduits = 0
  			var nombreProduitTotal = 0
  			var price = 0
	    	return (
		    	<div className="order-wrap">
			        <h2>Caddie</h2>
			        	{
				            Object
			              	.keys(this.props.details)
			              	.map(function (key){
			              		price = price + that.props.details[key].prixFinal
			              		
				              	return(
				              		
					              		<div>
					              		    <p>{that.props.details[key].nombreProduits}Kg de <b>{that.props.details[key].name}</b> pour un prix de <b className="price">{formatPrice(that.props.details[key].prixFinal)+"€"}</b></p>
					              		</div>
					              		
				              	)
				            })
				        }
		          		
				          		{
						            Object
					              	.keys(this.props.details)
					              	.map(function (key){
					              		nombreProduitTotal = nombreProduitTotal + that.props.details[key].nombreProduits
					              	})
					            }
			            		<strong>Total (TTC) :</strong>{formatPrice(price) +"€"}
		            		
	      		</div>
	    	)
	    } else {
	    	return (
		    	<div className="order-wrap">
			        <h2>Caddie</h2>
		            <p><strong>Rien dans votre caddie !</strong> Choissez des légumes dans la colonne de gauche !</p>
	      		</div>
	    	)
	    }
  	}
}

export default Order;