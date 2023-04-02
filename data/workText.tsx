import LandingPageSvg from "@/svg/LandingPageSvg"
import MobileAppSvg from "@/svg/MobileAppSvg"
import WebAppSvg from "@/svg/WebAppSvg"

export const workTexts = [
  {
    type: 1,
    title: "Company Profile",
    text: `Salah satu keunggulan jasa kami adalah kecepatan pembuatan. Kami mengerti bahwa waktu adalah faktor krusial dalam mempromosikan bisnis Anda. Landing page buatan kami juga ramah SEO, yang berarti halaman Anda akan mudah ditemukan di mesin pencari seperti Google
    Selain itu, kami selalu menggunakan teknologi terbaru dalam pembuatan landing page Anda, tetap dengan menggunakan native javascript untuk performa kecepatan maximal. Dengan demikian, Anda dapat memastikan bahwa landing page Anda akan berkinerja baik dan dapat ditingkatkan seiring dengan pertumbuhan bisnis Anda.`,
    svgEle: <LandingPageSvg />,
  },
  {
    type: 2,
    title: "Application Development",
    text: `Kami memahami bahwa keberadaan online sangat penting saat ini. Kami bekerja sama dengan klien untuk memahami tujuan bisnis klien dan membuat aplikasi web yang memenuhi semua persyaratan klien. Sistem manajemen konten yang sederhana atau platform e-commerce yang kompleks, kami memiliki keterampilan dan pengalaman untuk mewujudkan visi klien.
    Tim kami menggunakan teknologi terbaru dan praktik terbaik industri untuk memastikan bahwa aplikasi web klien aman, dapat ditingkatkan, dan berkinerja tinggi. Kami juga menyediakan dukungan dan pemeliharaan berkelanjutan untuk memastikan bahwa aplikasi klien terus memenuhi kebutuhan klien seiring dengan pertumbuhan bisnis klien.`,
    svgEle: <WebAppSvg />,
  },
  {
    type: 3,
    title: "Toko Online",
    text: `Berbelanja dengan kami mudah dan nyaman. Cukup jelajahi situs web kami, tambahkan barang ke keranjang Anda, dan lakukan pembayaran dengan aman menggunakan sistem pemrosesan pembayaran terpercaya kami. Selain itu, dengan pengiriman yang cepat dan handal, Anda akan menerima pesanan Anda dalam waktu singkat. Dan dengan penjualan dan promosi reguler, serta program rewards kami, Anda dapat menghemat lebih banyak lagi pada produk favorit Anda. Selain itu, daftarlah untuk newsletter kami agar tetap up-to-date dengan penawaran dan tren terbaru.`,
    svgEle: <MobileAppSvg />,
  },
]
