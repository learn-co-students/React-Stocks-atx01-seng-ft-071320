import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const URL = 'http://localhost:3000/stocks'
class App extends Component {

  constructor() {
    super()

    this.state = {
      stocks: [],
      portfolio: [],
      sort: 'None',
      filter: 'All'
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(stocks => { this.setState({ stocks }) })
  }

  buyStock = (stock) => {
    // let newStock = {...stock}
    this.state.stocks.map((s) => {
      if (s.id ===stock.id){
         s.isBought = true;
        this.setState({portfolio: [...this.state.portfolio, s]})
      }
    })
    // console.log('we bought a stock from',stock.name)
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter((s) => s.id !== stock.id)
    })
    //  console.log('selling stock from', stock.name )
  }

  updateSort = sortBy => {
    this.setState({ sort: sortBy })
  }

  updateFilter = type  => {
    this.setState({ filter: type })
  }

  calculateDisplayStocks = () => {
    let filteredStocks = [...this.state.stocks]

    filteredStocks =  filteredStocks.filter((stock) => !stock.isBought )

    if(this.state.filter !== "All"){
      filteredStocks =  filteredStocks.filter(stock => stock.type === this.state.filter)        
    } 

    switch(this.state.sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
          return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }

  render() {
    let displayStocks = this.calculateDisplayStocks()
    // this.state.stocks.filter((stock) => !stock.isBought )
    return (
      <div>
        <Header />
        <MainContainer 
        stocks={displayStocks} 
        buyStock={this.buyStock} 
        portfolio = {this.state.portfolio} 
        removeStock = {this.removeStock}
        updateSort={this.updateSort}
        sort={this.state.sort}
        filter={this.state.filter}
        updateFilter={this.updateFilter}
        />
      </div>
    );
  }
}

export default App;
