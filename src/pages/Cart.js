import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart, removeFromCart, decreaseCart, clearCart, getTotals} from '../features/cartSlice';
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleClearCart = (cartItem) => {
    dispatch(clearCart());
  };

  return(
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty" >
          <p>Your cart is empty</p>
          <div className="start-shopping">
            <Link to="/" >
              <i className="fa fa-arrow-left"/>
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title" >Product</h3>
            <h3 className="price" >Price</h3>
            <h3 className="quantity" >Quantity</h3>
            <h3 className="total" >Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map(cartItem => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description.substring(0, 70)}...</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price" >${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price" >
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>taxes and shipping calculated at checkout</p>
              <button>Checkout</button>
              <div className="continue-shopping">
                <Link to="/" >
                  <i className="fa fa-arrow-left"/>
                  <span>Continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )} 
    </div>
  );
};

export default Cart;