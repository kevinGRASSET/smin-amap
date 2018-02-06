import React from 'react';
import Order from './Order';

class Veggie extends React.Component {
  render() 
  {
  	const details = this.props.details
    return (
     <li className = "menu-veggie">
     <img src={details.image} alt = {details.name} />
     <h3 className = "veggie-name">
     	{details.name}
     	<span className="price">{details.price}</span>
     </h3>
     <p>{details.desc}</p>
     <button  onClick={this.props.loadSamples} id="lol" name="lol" disabled={details.status === "unavailable"}>Ajouter aux panier</button>
     </li>
    )
  }
}

export default Veggie;
