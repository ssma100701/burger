import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

export default class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for(let param of query.entries()) {
      if(param[0] === 'price') {
        this.setState({price: param[1]});
      } else {
        ingredients[param[0]]  = +param[1];
      }
      
    }
    this.setState({ingredients});
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  }

  checkoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
        <Route 
          path={this.props.match.path + '/contact-data'} 
          component={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.price} {...props} />)} 
        />
      </div>
    )
  }
}
