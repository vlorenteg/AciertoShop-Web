import type { Product } from "../data/products";
import { mockProducts } from "../data/mockProducts";

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === "true";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

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
    return data;
  } catch (error) {
    console.error("Error cargando productos desde API. Usando mocks.", error);
    return mockProducts;
  }
}