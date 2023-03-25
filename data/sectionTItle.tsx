export interface sectionInterface {
  type: string
  subTitle?: string
  title: string
  text: string
}

export const sectionTitle: sectionInterface[] = [
  {
    type: "offer",
    subTitle: "OFFERS",
    title: "Layanan Kami",
    text: "Layanan yang kami sediakan telah berdasarkan kebutuhan untuk bisnis mulai dari bisnis yang telah berjalan dan sedang memulai bisnis.",
  },
  {
    type: "services",
    subTitle: "Our Value",
    title: "We do all Creative",
    text: "Value yang selalu kami berikan dalam setiap website yang kami kerjakan.",
  },
  {
    type: "process",
    title: "Alur Pengerjaan",
    text: "Anda dapat melihat alur kerja yang selalu kami gunakan dalam pembuatan website.",
  },
  {
    type: "porto",
    title: "Our Works",
    subTitle: "PORTFOLIO",
    text: "We specialize in digital, graphic, and dimensional design to produce brand experiences that stand out and provide meaningful value.",
  },
  {
    type: "tech",
    subTitle: "TECH STACKS",
    title: "Available Tech Stacks",
    text: "Selalu memberikan Teknologi Pemprograman terbaru, untuk meningkatkan kualitas dan layanan",
  },
  {
    type: "contact",
    subTitle:"CONTACT",
    title: "Reach Us",
    text: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
  },
]
