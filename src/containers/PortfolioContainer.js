import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(p => (
              <Stock key={p.id} stock={p} handleClick={this.props.handleClick}/>
            ))
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
