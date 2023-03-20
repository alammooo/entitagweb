export interface OfferInterface {
  type: string
  price: number
  benefit: string[]
}
export const offerType = [
  {
    type: "COMPANY PROFILE",
    price: 2500000,
    discountPrice: 2000000,
    text: "Landing page cocok untuk bisnis yang ingin memasarkan produknya secara online dengan kartu kartu interaktif yang berisi tentang produk unggulan dengan biaya yang terjangkau",
    benefit: [
      "Responsive Website",
      "Lightspeed Performance",
      "Statistik Pengunjung",
      "Gallery",
      "SEO Friendly",
      "Custom Design",
      "Free Maintenance",
      "Native Script Website",
      "Navigasi antar page",
    ],
  },
  {
    type: "WEB APPLICATION",
    price: 10000000,
    discountPrice: 8000000,
    benefit: [
      "Single Page Application",
      "Newest Technology Stack",
      "Custom Design",
      "Rich Features",
      "MVP Development",
      "Secure Website",
      "Rapid Performance",
    ],
  },
  {
    type: "MOBILE APPLICATION",
    price: 10000000,
    discountPrice: "Contact Us",
    benefit: ["Rich Mobile Experience", "Custom Features", "Deploy on S"],
  },
]
