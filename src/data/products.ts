export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'CARGOS' | 'LOWER' | 'TSHIRTS' | 'SPORTSWEAR' | 'ACCESSORIES';
  image: string;
}

export const products: Product[] = [
  {
    id: "KM-01",
    name: "KM-01 CYBER WINDBREAKER",
    price: 2499,
    description: "Premium light-weight windbreaker engineered for functional street styling. Water-resistant outer shell with neon hardware details and adjustable toggles.",
    category: "SPORTSWEAR",
    image: "/images/product_windbreaker.png"
  },
  {
    id: "KM-02",
    name: "KM-02 GRAPHIC SWEATSHIRT",
    price: 1899,
    description: "Heavyweight drop-shoulder sweatshirt constructed from ultra-soft brushed loopback fleece. Features custom graphic printing across the front panel.",
    category: "LOWER",
    image: "/images/product_hoodie.png"
  },
  {
    id: "KM-03",
    name: "KM-03 ALPHA CARGO PANTS",
    price: 2299,
    description: "Multi-pocket technical utility cargo pants featuring adjustable leg straps, metal clips, and structured knee paneling for zero-gravity motion styling.",
    category: "CARGOS",
    image: "/images/product_pants.png"
  },
  {
    id: "KM-04",
    name: "KM-04 TACTICAL VEST SHELL",
    price: 2999,
    description: "Layered vest shell with utility pockets and side webbing adjusters. Blends tactical functionality with clean streetwear silhouettes.",
    category: "SPORTSWEAR",
    image: "/images/product_windbreaker.png"
  },
  {
    id: "KM-05",
    name: "KM-05 APEX FLEECE HOODIE",
    price: 1999,
    description: "Signature streetwear fleece hoodie featuring a double-lined hood, kangaroo pockets, and high-density branding details.",
    category: "LOWER",
    image: "/images/category_hoodie.png"
  },
  {
    id: "KM-06",
    name: "KM-06 GIGA TACTICAL BOOTS",
    price: 3999,
    description: "Futuristic tactical boots featuring high-traction lug soles, waterproof zipper fly, speed laces, and electric yellow stitching.",
    category: "SPORTSWEAR",
    image: "/images/product_boots.png"
  },
  {
    id: "KM-07",
    name: "KM-07 OVERSIZED GRAPHIC TEE",
    price: 1299,
    description: "Boxy fit heavy cotton t-shirt with signature vanguard graphic prints on front and back. Ribbed crewneck and drop shoulders.",
    category: "TSHIRTS",
    image: "/images/category_tshirt.png"
  },
  {
    id: "KM-08",
    name: "KM-08 TECHWEAR BUCKET HAT",
    price: 899,
    description: "Utility bucket hat in matte black nylon with custom loops, side ventilation ports, and a detachable utility strap.",
    category: "ACCESSORIES",
    image: "/images/category_accessories.png"
  },
  {
    id: "KM-09",
    name: "KM-09 URBAN CARGO JOGGERS",
    price: 2199,
    description: "Tapered utility joggers with elastic cuffs, zip cargo pockets, and lightweight everyday streetwear flex paneling.",
    category: "CARGOS",
    image: "/images/category_pants.png"
  },
  {
    id: "KM-10",
    name: "KM-10 CORE LOGO T-SHIRT",
    price: 1199,
    description: "Clean everyday core t-shirt featuring high-density front print KMZONE logo on high-grade organic combed cotton.",
    category: "TSHIRTS",
    image: "/images/product_hoodie.png"
  }
];
