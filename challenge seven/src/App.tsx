import Welcome from "./components/Welcome";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <Welcome username="Zaki" isPremium={true} />

      <ProductCard name="Laptop" price={1200} />
      <ProductCard
        name="Phone"
        price={800}
        description="Latest model"
      />
    </div>
  );
}

export default App;