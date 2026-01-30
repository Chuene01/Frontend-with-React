import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const inCart = items.find(i => i.id === plant.id);

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>R{plant.price}</p>
      <button
        disabled={inCart}
        onClick={() => dispatch(addToCart(plant))}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
