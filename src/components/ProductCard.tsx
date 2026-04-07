import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const fallbackImage = "/images/fallback.jpg";
  const imageSrc = product.image ? `/images/${product.image}` : fallbackImage;

  return (
    <article className="product-card">
      <img src={imageSrc} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">{Number(product.price).toFixed(2)} €</p>
        <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
      </div>
    </article>
  );
}

export default ProductCard;