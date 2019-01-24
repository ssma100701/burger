import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import _ from 'lodash';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

  state = {
    orders: null,
    loading: true
  }

  componentDidMount() {
    axios.get('/order.json')
      .then(response => {
        this.setState({
          loading: false,
          orders: response.data
        });
      })
      .catch(err => {
        this.setState({loading: false});
      });
  }

  ordersHandler = () => {
    // console.log(this.state);
    let orders = [];
    _.forOwn(this.state.orders, (value, key ) => {
      orders.push({
        ...value,
        id: key
      });
    })
    console.log(orders);
    return orders;
  }

  render() {
    let orders = this.ordersHandler();
    return (
      <div>
        {orders.map((order) => (
          <Order 
            key={order.id} 
            price={+order.price}
            ingredients={order.ingredients}
          />
        ))}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);
