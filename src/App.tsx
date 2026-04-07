import { useEffect, useState } from "react";
import type { Product } from "./data/products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

type CartItem = Product & {
  quantity: number;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <Hero />
      <main className="container main-layout">
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      </main>
      <Footer />
    </>
  );
}

export default App;