import React from "react";
import { ListGroupItem } from "react-bootstrap";
import productImg from "../../../assets/images/product_01.1.jpg";
import "../../../style/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-card/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const increamentItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="  cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} />

        <div className="cart__product-info d-flex align-items-center gap-4 w-100 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex justify-content-between align-items-center gap-3 increase__decrease-btn">
              <span className="increase__btn" onClick={increamentItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
