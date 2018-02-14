import React from 'react';

class Veggie extends React.Component {

   //Focntion pour créer les éléments
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

    // Création d'un tableau de bouton et ajout 
  var tabProduit= []
    if (details.status === "available"){
            tabProduit.push(<button onClick={() => this.createOrder()} key={tabProduit + this.props.details.name}>Ajouter au panier</button>)
        } else {
            tabProduit.push(<button disabled>Plus de stock !</button>)
        }

    //Affichage
    return (
    <li className="menu-veggie">
                <img src={details.image} alt=""/>
                <h3 className="veggie-name">
                    {details.name}
                    <span className="price">{details.price}</span>
                </h3>
                <p>{details.desc}</p>
                {tabProduit}
            </li>
    )
  }
}

export default Veggie;
