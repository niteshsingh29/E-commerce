import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "./../Redux/CartSlice"
 

const Cart = () => {
  const dispatch = useDispatch()
  const [price, setPrice] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const lengthItems = useSelector((state) => state.cartDetail.value);

  const handleRemove = (e, item) => {
    dispatch(removeCartItem(item))
    setCurrentItems(lengthItems);
  };

  const handlePrice = () => {
    let ans = 0;
    lengthItems?.map((item) => ans += item.price);
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    setCurrentItems(lengthItems);

  }, [lengthItems]);

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
