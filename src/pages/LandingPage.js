import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>GreenLeaf</h1>
      <p>
        GreenLeaf brings nature into your home with carefully selected,
        beautiful houseplants.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
