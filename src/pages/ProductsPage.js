import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";

export default function ProductsPage() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="grid">
            {plants
              .filter(p => p.category === cat)
              .map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
