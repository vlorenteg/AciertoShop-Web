import type { Product } from "../data/products";
import { mockProducts } from "../data/mockProducts";

const API_URL = import.meta.env.VITE_API_URL;
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

export async function getProducts(): Promise<Product[]> {
  if (USE_MOCKS) {
    return mockProducts;
  }

  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error(`Error ${response.status} al cargar productos`);
    }

    const data: Product[] = await response.json();

    return data.map((product) => ({
      ...product,
      image: product.image || "/images/default-product.jpg",
    }));
  } catch (error) {
    console.error("Error cargando productos desde la API. Usando datos mock.", error);
    return mockProducts;
  }
}