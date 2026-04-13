import type { Product } from "../data/products";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "CAFETERA BOSCH TASSIMO IVY 2",
    category: "Hogar",
    description: "CAFETERA BOSCH TASSIMO IVY 2",
    stock: 12,
    price: 49.99,
    image: "cafetera.jpg",
  },
  {
    id: 2,
    name: "CEPILLO BABYLISS SMOOTHING HEATED BRUSH",
    category: "Cuidados",
    description: "CEPILLO BABYLISS SMOOTHING HEATED BRUSH",
    stock: 5,
    price: 34.99,
    image: "cepillo.jpg",
  },
  {
    id: 3,
    name: "ENVASADORA AL VACIO ABOX V36",
    category: "Oficina",
    description: "ENVASADORA AL VACIO ABOX V36",
    stock: 20,
    price: 19.99,
    image: "envasadora.jpg",
  },
  {
    id: 4,
    name: "JUEGO DE POKER CON MALETIN",
    category: "Ocio",
    description: "JUEGO DE POKER CON MALETIN",
    stock: 20,
    price: 29.99,
    image: "poker.jpg",
  },
];