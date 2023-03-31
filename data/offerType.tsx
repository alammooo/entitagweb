export interface OfferInterface {
  type: string
  price: number
  text?: string
  benefit: string[]
}
export const offerType: OfferInterface[] = [
  {
    type: "COMPANY PROFILE",
    price: 1500000,
    benefit: [
      "Newest Technology Stack",
      "Mobile Friendly",
      "Custom Design",
      "Rich Features",
      "Email Business",
      "Statistic Visior",
      "Garansi Pemeliharaan",
    ],
  },
  {
    type: "TOKO ONLINE",
    price: 2000000,
    text: "Landing page cocok untuk bisnis yang ingin memasarkan produknya secara online dengan kartu kartu interaktif yang berisi tentang produk unggulan dengan biaya yang terjangkau",
    benefit: [
      "Responsive Website",
      "Custom Design",
      "Statistik Pengunjung",
      // "Gallery",
      "Integrasi Sistem Pembayaran",
      "Sales Report",
      "Garansi Pemeliharaan",
      "Integtasi Sistem Pengiriman",
      // "Navigasi antar page",
    ],
  },
  {
    type: "APPLICATION DEVELOPMENT",
    price: 10000000,
    benefit: [
      "Aplikasi sistem HR",
      "Aplikasi untuk Inventory Management",
      // "Statistik Pengunjung",
      "Aplikasi Form Generator",
      "Aplikasi Pencatatan Keuangan",
      "Aplikasi absensi Karyawan",
      "Aplikasi Claim & Reimbursement",
      "Aplikasi Sales Taking Order",
      "Aplikasi Custom Sesuai Kebutuhan",
      // "Navigasi antar page",
    ],
  },
]
