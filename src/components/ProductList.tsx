import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <section className="products-section">
      <div className="section-title">
        <p>Catálogo</p>
        <h2>Productos destacados</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;