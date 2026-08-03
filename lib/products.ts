export type Category = "all" | "kulfis" | "popsicles" | "sipup"

export type ProductCategory = Exclude<Category, "all">

export type Product = {
  name: string
  description: string
  category: ProductCategory
  image: string
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; blurb: string; image: string; accent: string }
> = {
  kulfis: {
    label: "Kulfis",
    blurb: "Badam, Malai & classic nostalgic sticks",
    image: "/products/kulfi-range-boxes.jpg",
    accent: "bg-[#7a3040] text-white",
  },
  popsicles: {
    label: "Milk Popsicles",
    blurb: "Strawberry, Chocolate, Coconut, Custard Apple & more",
    image: "/products/milk-popsicles-lineup.png",
    accent: "bg-gold-deep text-cream",
  },
  sipup: {
    label: "Sip-Ups",
    blurb: "Fruit & milk refreshing sips",
    image: "/products/picnic-cooler.jpg",
    accent: "bg-[#e07a3a] text-white",
  },
}

/** Home bestsellers row — marketing categories */
export const bestsellers = [
  {
    name: "Kulfi (Big & Small)",
    href: "/products?category=kulfis",
    image: "/products/kulfi-range-boxes.jpg",
    bg: "bg-[#f3e6d4]",
    tag: "Classic",
  },
  {
    name: "Premium Cups",
    href: "/products?category=kulfis",
    image: "/cupIcecream.jpg",
    bg: "bg-[#f8d9df]",
    tag: "Scoops",
  },
  {
    name: "Milk Popsicles",
    href: "/products?category=popsicles",
    image: "/products/milk-popsicles-lineup.png",
    bg: "bg-[#e5f0d8]",
    tag: "Best sellers",
  },
  {
    name: "Choco Indulgence",
    href: "/products?category=popsicles",
    image: "/products/hero-composite-b.png",
    bg: "bg-[#efe4dc]",
    tag: "Rich",
  },
  {
    name: "Fruit Popsicles",
    href: "/products?category=popsicles",
    image: "/products/jackfruit-strawberry.jpg",
    bg: "bg-[#e8dff5]",
    tag: "Fresh",
  },
] as const

/** Arch flavour strip on home */
export const featuredFlavours = [
  { name: "Kulfi Badam", image: "/products/hero-kulfi-badam.jpg", href: "/products?category=kulfis" },
  { name: "Kulfi Malai", image: "/products/kulfi-malai-boxes.jpg", href: "/products?category=kulfis" },
  { name: "Mango", image: "/products/flavor-mango.png", href: "/products?category=popsicles" },
  { name: "Chocolate", image: "/products/flavor-chocolate.png", href: "/products?category=popsicles" },
  { name: "Strawberry", image: "/products/flavor-strawberry.png", href: "/products?category=popsicles" },
  { name: "Tender Coconut", image: "/products/flavor-tender-coconut.png", href: "/products?category=popsicles" },
] as const

export const productsByCategory: Record<ProductCategory, Omit<Product, "category">[]> = {
  kulfis: [
    {
      name: "Kulfi Badam",
      description: "Creamy almond kulfi with real nuts — melt your heart with nostalgia.",
      image: "/products/hero-kulfi-badam.jpg",
    },
    {
      name: "Kulfi Malai",
      description: "Traditional malai kulfi, rich and timeless.",
      image: "/products/kulfi-malai-boxes.jpg",
    },
    {
      name: "Kulfi Range",
      description: "Premium kulfi sticks crafted for every occasion.",
      image: "/products/kulfi-range-boxes.jpg",
    },
    {
      name: "Mango Kulfi",
      description: "Sun-ripe mango folded into classic kulfi cream.",
      image: "/products/kulfi-mango-splash.jpg",
    },
  ],
  popsicles: [
    {
      name: "Mango Milk Popsicle",
      description: "Bright Alphonso mango milk popsicle — 100% natural joy.",
      image: "/products/flavor-mango.png",
    },
    {
      name: "Chocolate Milk Popsicle",
      description: "Rich chocolate milk popsicle made to impress.",
      image: "/products/flavor-chocolate.png",
    },
    {
      name: "Strawberry Milk Popsicle",
      description: "Creamy strawberry with real fruit character.",
      image: "/products/flavor-strawberry.png",
    },
    {
      name: "Tender Coconut",
      description: "Fresh coconut milk popsicle — light and cooling.",
      image: "/products/flavor-tender-coconut.png",
    },
    {
      name: "Jackfruit",
      description: "Exotic jackfruit milk popsicle with tropical depth.",
      image: "/products/flavor-jackfruit.png",
    },
    {
      name: "Guava",
      description: "Pink guava popsicle — fragrant and refreshing.",
      image: "/products/flavor-guava.png",
    },
    {
      name: "Avocado",
      description: "Creamy avocado milk popsicle with a soft finish.",
      image: "/products/flavor-avacado.png",
    },
    {
      name: "Chikku",
      description: "Sapota (chikku) milk popsicle — naturally sweet.",
      image: "/products/flavor-chikku.png",
    },
    {
      name: "Custard Apple",
      description: "Delicate custard apple milk popsicle.",
      image: "/products/flavor-custard-apple.png",
    },
  ],
  sipup: [
    {
      name: "Summer Sip Collection",
      description: "Cooling sip-ups for sunny Gulf days.",
      image: "/products/picnic-cooler.jpg",
    },
    {
      name: "Fruit Sip Mix",
      description: "Colourful fruit sips packed with flavour.",
      image: "/products/jackfruit-strawberry.jpg",
    },
    {
      name: "Berry Sky Sip",
      description: "Bright berry notes for an instant refresh.",
      image: "/products/strawberry-sky.jpg",
    },
  ],
}

export function getAllProducts(): Product[] {
  return (Object.keys(productsByCategory) as ProductCategory[]).flatMap((category) =>
    productsByCategory[category].map((item) => ({
      ...item,
      category,
    })),
  )
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === "all") return getAllProducts()
  return productsByCategory[category].map((item) => ({
    ...item,
    category,
  }))
}

export const categoryFilters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kulfis", label: "Kulfis" },
  { id: "popsicles", label: "Popsicles" },
  { id: "sipup", label: "Sip-Ups" },
]
