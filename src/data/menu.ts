// src/data/menu.ts

export type MenuCategory = "Gelatinas" | "Flanes" | "Carlotas" | "Cremitas" | "Pay de Queso";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
}

export const menuItems: readonly MenuItem[] = [
  // Gelatinas (3)
  {
    id: "gelatina-mosaico",
    name: "Gelatina Mosaico",
    description: "Un festín de colores y sabores frutales en una base cremosa de leche condensada.",
    price: "$35.00",
    category: "Gelatinas",
    image: "/mosaico.png",
  },
  {
    id: "gelatina-jerez",
    name: "Gelatina de Jerez",
    description: "El sabor clásico de la tradición, con notas sutiles de vino generoso y textura firme.",
    price: "$28.00",
    category: "Gelatinas",
    image: "/gelatina-jerez.png",
  },
  {
    id: "gelatina-limón",
    name: "Gelatina de Limón",
    description: "Refrescante y ligera, elaborada con jugo natural de limones de la región.",
    price: "$25.00",
    category: "Gelatinas",
    image: "/gelatina-limon.png",
  },
  // Flanes (2)
  {
    id: "flan-horneado",
    name: "Flan Horneado",
    description: "La perfección del caramelo quemado fundiéndose con una crema densa de vainilla real.",
    price: "$45.00",
    category: "Flanes",
    image: "/flan-horneado.png",
  },
  {
    id: "flan-sencillo",
    name: "Flan Sencillo",
    description: "Elaborado con caramelo, logrando una textura suave y un balance único.",
    price: "$50.00",
    category: "Flanes",
    image: "/flan-sencillo.png",
  },
  // Carlotas (2)
  {
    id: "carlota-limon",
    name: "Carlota de Limón",
    description: "Capas de galleta María abrazadas por una crema cítrica que se deshace en el paladar.",
    price: "$40.00",
    category: "Carlotas",
    image: "/carlota-limon.png",
  },
  {
    id: "carlota-cafe",
    name: "Carlota de Café",
    description: "Infusionada con granos seleccionados de Oaxaca para un sabor intenso y reconfortante.",
    price: "$42.00",
    category: "Carlotas",
    image: "/carlota-cafe.png",
  },
  // Cremitas (1)
  {
    id: "cremita-historica",
    name: "La Cremita Histórica",
    description: "Nuestra receta insignia desde 1974. Una crema suave con el sabor que definió nuestra tradición.",
    price: "$20.00/pieza",
    category: "Cremitas",
    image: "/Cremita.png",
  },
  // Pay de Queso (1)
  {
    id: "pay-de-queso",
    name: "Pay de Queso Artesanal",
    description: "Nuestro pay horneado lentamente con una base crujiente de galleta y un relleno de queso crema premium, siguiendo la receta secreta de la casa desde 1974.",
    price: "$55.00/rebanada",
    category: "Pay de Queso",
    image: "/Pay.png",
  },
] as const;

/**
 * Filtra productos por categoría.
 * Retorna arreglo vacío si no hay coincidencias.
 */
export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}
