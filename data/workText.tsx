import LandingPageSvg from "@/svg/LandingPageSvg"
import MobileAppSvg from "@/svg/MobileAppSvg"
import WebAppSvg from "@/svg/WebAppSvg"

export const workTexts = [
  {
    type: 1,
    title: "Company Page",
    text: `Salah satu keunggulan layanan kami adalah kecepatan pembuatan. Kami mengerti bahwa waktu adalah faktor krusial dalam mempromosikan bisnis Anda. Landing page buatan kami juga ramah SEO, yang berarti halaman Anda akan mudah ditemukan di mesin pencari seperti Google
    Selain itu, kami selalu menggunakan teknologi terbaru dalam pembuatan landing page Anda, tetap dengan menggunakan native javascript untuk performa kecepatan maximal. Dengan demikian, Anda dapat memastikan bahwa landing page Anda akan berkinerja baik dan dapat ditingkatkan seiring dengan pertumbuhan bisnis Anda.`,
    svgEle: <LandingPageSvg />,
  },
  {
    type: 2,
    title: "Web Application",
    text: `Kami memahami bahwa keberadaan online sangat penting saat ini. Kami bekerja sama dengan Client untuk memahami tujuan bisnis Client dan membuat aplikasi web yang memenuhi semua persyaratan Client. Sistem manajemen konten yang sederhana atau platform e-commerce yang kompleks, kami memiliki keterampilan dan pengalaman untuk mewujudkan visi Client.
    Tim kami menggunakan teknologi terbaru dan praktik terbaik industri untuk memastikan bahwa aplikasi web Client aman, dapat ditingkatkan, dan berkinerja tinggi. Kami juga menyediakan dukungan dan pemeliharaan berkelanjutan untuk memastikan bahwa aplikasi Client terus memenuhi kebutuhan Client seiring dengan pertumbuhan bisnis Client.`,
    svgEle: <WebAppSvg />,
  },
  {
    type: 3,
    title: "Online Shop",
    text: `We made create-t3-app to do one thing: Streamline the setup of
    typesafe Next.js apps WITHOUT compromising modularity. After
    countless projects and many years on this tech, we have lots of
    opinions and insights. We've done our best to encode them into this
    CLI. This is NOT an all-inclusive template. We expect you to bring
    your own libraries. Check out our other recommendations for things
    like state management and deployment.`,
    svgEle: <MobileAppSvg />,
  },
]
