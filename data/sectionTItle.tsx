import {
  COMPANYPROFILEFEATURE,
  ONLINESHOPFEATURES,
} from "@/interfaces/interfaces"

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
    title: "Jasa Kami",
    text: "Jasa yang kami sediakan telah berdasarkan kebutuhan untuk bisnis mulai dari bisnis yang telah berjalan dan sedang memulai bisnis.",
  },
  {
    type: "services",
    subTitle: "Our Value",
    title: "We do all Creative",
    text: "Value yang selalu kami berikan dalam setiap website yang kami kerjakan.",
  },
  {
    type: "process",
    title: "Workflow Process",
    text: "Anda dapat melihat alur kerja yang kami gunakan dalam pembuatan website.",
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
    text: "Kami memberikan teknologi terbaru untuk meningkatkan kualitas dan jasa",
  },
  {
    type: "contact",
    subTitle: "CONTACT",
    title: "Reach Us",
    text: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
  },
  {
    type: COMPANYPROFILEFEATURE,
    subTitle: "",
    title: "Fitur Andalan",
    text: "Fitur terbaik kami untuk company profile",
  },
  {
    type: ONLINESHOPFEATURES,
    subTitle: "",
    title: "Fitur Andalan",
    text: "Fitur terbaik kami untuk online shop",
  },
]
