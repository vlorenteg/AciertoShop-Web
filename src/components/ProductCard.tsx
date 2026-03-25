import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">{product.price.toFixed(2)} €</p>
        <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
      </div>
    </article>
  );
}

export default ProductCard;