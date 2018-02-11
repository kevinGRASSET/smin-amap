import React from 'react';

class Veggie extends React.Component {

   createOrder() {
        const order = {
          name: this.props.details.name,
          image: this.props.details.image,
          price: this.props.details.price,
          nombreProduitDispo: this.props.details.nombreProduitDispo,
          nombreProduits: 1,
          prixFinal: this.props.details.price,
        }
        this.props.addOrder(order);
    }

    
  render() {
    const details = this.props.details

  var ajoutPanier = []
    if (details.status === "available"){
            ajoutPanier.push(<button onClick={() => this.createOrder()} key={ajoutPanier + this.props.details.name}>Ajouter au panier</button>)
        } else {
            ajoutPanier.push(<button disabled>Plus de stock !</button>)
        }

       
        
    


    return (
    <li className="menu-veggie">
                <img src={details.image} alt=""/>
                <h3 className="veggie-name">
                    {details.name}
                    <span className="price">{details.price}</span>
                </h3>
                <p>{details.desc}</p>
                {ajoutPanier}
            </li>
    )


  }


}

export default Veggie;
