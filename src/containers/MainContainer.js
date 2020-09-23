import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sort={this.props.sort} updateSort={this.props.updateSort} filter={this.props.filter} updateFilter={this.props.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} handleClick={this.props.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} handleClick={this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
