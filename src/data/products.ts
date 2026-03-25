import cafeteraImg from "../assets/cafetera.jpeg";
import cepilloImg from "../assets/cepillo.jpeg";
import envasadoraImg from "../assets/envasadora.jpeg";
import pokerImg from "../assets/poker.jpeg";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "CAFETERA BOSCH TASSIMO IVY 2",
    price: 49.99,
    category: "Hogar",
    image: cafeteraImg,
  },
  {
    id: 2,
    name: "CEPILLO BABYLISS SMOOTHING HEATED BRUSH",
    price: 34.99,
    category: "Cuidados",
    image: cepilloImg,
  },
  {
    id: 3,
    name: "ENVASADORA AL VACIO ABOX V63",
    price: 19.99,
    category: "Oficina",
    image: envasadoraImg,
  },
  {
    id: 4,
    name: "JUEGO DE POKER CON MALETIN",
    price: 29.99,
    category: "Ocio",
    image: pokerImg,
  },
];