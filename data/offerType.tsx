export interface OfferInterface {
  type: string
  price: number
  discountPrice?: number
  text?: string
  benefit: string[]
}
export const offerType: OfferInterface[] = [
  {
    type: "COMPANY PROFILE",
    price: 1500000,
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
    type: "TOKO ONLINE",
    price: 2000000,
    text: "Landing page cocok untuk bisnis yang ingin memasarkan produknya secara online dengan kartu kartu interaktif yang berisi tentang produk unggulan dengan biaya yang terjangkau",
    benefit: [
      "Responsive Website",
      "Lightspeed Performance",
      "Statistik Pengunjung",
      // "Gallery",
      "SEO Friendly",
      "Custom Design",
      "Free Maintenance",
      "Native Script Website",
      // "Navigasi antar page",
    ],
  },
  {
    type: "APPLICATION DEVELOPMENT",
    price: 1000000,
    benefit: [
      "Responsive Website",
      "Lightspeed Performance",
      // "Statistik Pengunjung",
      "Gallery",
      "SEO Friendly",
      "Custom Design",
      "Free Maintenance",
      "Native Script Website",
      // "Navigasi antar page",
    ],
  },
]
