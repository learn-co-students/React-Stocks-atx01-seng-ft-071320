import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock) => {
            return <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick}/> //return is needed becuz we used {} instead of ()
          })
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
