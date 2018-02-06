import React from 'react';

class Order extends React.Component 
{
  render() 
  {
    return 
    (
      <div>
        <p>Inventory</p>
        <button onClick={this.props.loadSamples}>Charger des légumes</button>
      </div>
    )
   }
}

export default Order;
