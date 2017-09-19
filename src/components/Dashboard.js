import React, { Component } from 'react';
import { subscribeToProductStock } from '../api';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: {
              apple:
                {
                  remoteStock: 0
                }
            }
        };
    }

    componentDidMount() {
      const { products } = this.state;
      const productCodes = Object.keys(products)
      productCodes.forEach(productCode => {
        subscribeToProductStock(productCode, (err, stockLevel) => {
          products[productCode].remoteStock = stockLevel
          this.setState({
            products
          });
        })
      });
    }

    render() {
      const { products } = this.state;
      const productCodes = Object.keys(products);
      return (
        <div className="App">
          { productCodes.map(productCode =>
              <p className="App-intro" key={productCode}>
                We have {products[productCode].remoteStock} {productCode}(s)
              </p>
            )}
        </div>
      );
    }
}

export default Dashboard
