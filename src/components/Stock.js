import React, { useImperativeHandle } from 'react'

const Stock = (props) => (
  // no need for a return because () implicitely returns
  <div>

    <div className="card" onClick={() => props.handleClick(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name 
            //Company Name
          }</h5>
        <p className="card-text">{
          <span>{props.stock.ticker} : {props.stock.price}</span>
            //ticker: stock price
          }</p>
      </div>
    </div>
  

  </div>
);

export default Stock
