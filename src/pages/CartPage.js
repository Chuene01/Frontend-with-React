import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalCost = items.reduce((s, i) => s + i.quantity * i.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <p>Total Plants: {totalItems}</p>
      <p>Total Cost: R{totalCost}</p>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>R{item.price}</p>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button>Checkout (Coming Soon)</button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
