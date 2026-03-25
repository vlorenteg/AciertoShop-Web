import type { Product } from "../data/products";

type CartItem = Product & {
  quantity: number;
};

type CartProps = {
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
};

function Cart({ cart, onRemoveFromCart }: CartProps) {
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <aside className="cart">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos añadidos todavía.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <div>
                  <span>{product.name}</span>
                  <small>Cantidad: {product.quantity}</small>
                </div>

                <div className="cart-item-right">
                  <strong>
                    {(product.price * product.quantity).toFixed(2)} €
                  </strong>
                  <button onClick={() => onRemoveFromCart(product.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <strong>{total.toFixed(2)} €</strong>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;