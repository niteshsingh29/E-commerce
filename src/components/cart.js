import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useSelector } from "react-redux";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const lengthItems = useSelector((state) => state.cartDetail.value);

  const handleRemove = (e, item) => {
    const removedItems = currentItems?.filter((i) => i.id !== item.id);
    setCurrentItems(removedItems);
  };

  const handlePrice = () => {
    let ans = 0;
    currentItems?.map((item) => ans += item.price);
    setPrice(ans);
  };

  useEffect(() => {
    setCurrentItems(lengthItems)
  }, [lengthItems]);

  useEffect(() => {
    handlePrice();
  }, [lengthItems, currentItems]);

  return (
    <article>
      {currentItems?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <span>{'Price :-' + ' ' + item.price}</span>
            <button className="btn btn-danger d-flex" onClick={(e) => handleRemove(e, item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="text-dark d-flex justify-content-between">
        <h3>Total Price of your Cart</h3>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
