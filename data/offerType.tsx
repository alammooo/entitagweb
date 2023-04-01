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
    text: "Membuat website untuk memperkenalkan perusahaan kadang terasa sulit, terutama jika masih dalam skala usaha kecil. Tim kami akan membantu Anda membuat COMPANY PROFILE professional yang cocok dengan branding Anda saat ini",
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
    text: "Membuat toko online untuk bisnis Anda tidak sesulit yang dipikirkan. Kami akan membantu anda untuk mewujudkan impian untuk memiliki toko online yang dapat menjangkau pasar kota lain, bahkan negara lain yang telah dilengkapi dengan fitur untuk memudahkan anda memproses pesanan customer dalam sistem bisnis online seperti penjualan, statistik, dukungan pelanggan, dan bantuan 24/7",
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
    text: "Entitag Tech adalah perusahaan pembuatan Software bisnis profesional, membantu perusahaan mengelola proses bisnis dengan lebih efektif dan efisien. Kami selalu memberikan insight bisnis yang membuat perusahaan anda dapat terus berkembang dan lebih produktif ",
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
