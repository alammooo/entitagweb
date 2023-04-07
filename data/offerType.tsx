export interface OfferInterface {
  type: string
  price: number
  text?: string
  benefit: string[]
  linkTo: string
}
export const offerType: OfferInterface[] = [
  {
    type: "COMPANY PROFILE",
    price: 1500000,
    text: "Company Profile yang sesuai untuk kebutuhan online marketing saat ini",
    benefit: [
      "Newest Technology Stack",
      "Mobile Friendly",
      "Custom Design",
      "Rich Features",
      "Email Business",
      "Statistik Pengunjung",
      "Garansi Pemeliharaan",
    ],
    linkTo: "/company"
  },
  {
    type: "TOKO ONLINE",
    price: 2000000,
    text: "Toko Online untuk bisnis anda dengan berbagai macam fitur yang lengkap",
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
    linkTo: "onlineshop"
  },
  {
    type: "APPLICATION DEVELOPMENT",
    price: 10000000,
    text: "Aplikasi untuk bisnis/perusahaan anda dengan fitur yang sesuai dengan kebutuhan anda",
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
    linkTo:"/webapplication"
  },
]
