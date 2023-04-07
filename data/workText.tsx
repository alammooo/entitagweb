import LandingPageSvg from "@/svg/LandingPageSvg"
import MobileAppSvg from "@/svg/MobileAppSvg"
import WebAppSvg from "@/svg/WebAppSvg"

export const workTexts = [
  {
    type: 1,
    title: "Company Profile",
    text: `Landing page yang ramah SEO, mudah ditemukan di mesin pencari. Menggunakan teknologi terbaru untuk pembuatan landing page Anda, serta menggunakan native javascript untuk performa kecepatan maximal. Anda dapat memastikan bahwa landing page Anda akan berkinerja baik dan dapat ditingkatkan seiring dengan pertumbuhan bisnis Anda.`,
    svgEle: <LandingPageSvg />,
  },
  {
    type: 2,
    title: "Application Development",
    text: `Keberadaan online sangat penting saat ini. Kami bekerja sama untuk membuat aplikasi web yang memenuhi semua persyaratan anda. Sistem manajemen konten yang sederhana atau platform e-commerce yang kompleks.
    Menggunakan teknologi terbaru untuk memastikan bahwa aplikasi web klien aman, dapat ditingkatkan, dan berkinerja tinggi, yang difasilitasi dukungan dan pemeliharaan`,
    svgEle: <WebAppSvg />,
  },
  {
    type: 3,
    title: "Toko Online",
    text: `Jelajahi website anda, tambahkan barang ke keranjang Anda, dan lakukan pembayaran dengan aman menggunakan sistem pemrosesan pembayaran terpercaya kami. Dengan pengiriman yang cepat dan handal, Anda akan menerima pesanan Anda dalam waktu singkat. Dan dengan penjualan dan promosi reguler, serta program rewards kami, Anda dapat menghemat lebih banyak lagi pada produk favorit Anda.`,
    svgEle: <MobileAppSvg />,
  },
]
