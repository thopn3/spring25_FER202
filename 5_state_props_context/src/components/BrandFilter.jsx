import { useProduct } from "../hooks/useProduct";

const BrandFilter = () => {
  const { brands, brandIds, setBrandIds } = useProduct();

  const toggle = id => {
    setBrandIds(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <h4>Brand</h4>
      {brands.map(b => (
        <label key={b.id}>
          <input
            type="checkbox"
            checked={brandIds.includes(b.id)}
            onChange={() => toggle(b.id)}
          />
          {b.name}
        </label>
      ))}
    </section>
  );
};

export default BrandFilter;