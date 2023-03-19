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
    title: "Choose Your Best Plan",
    text: "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value.",
  },
  {
    type: "services",
    subTitle: "SERVICES WE'RE PROVIDED",
    title: "We do all Creative Services",
    text: "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value.",
  },
  {
    type: "process",
    title: "Our Process",
    text: "Our process involves the intersection of digital, graphic, and dimensional thinking to create exceptional brand experiences that are both meaningful and valuable.",
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
    text: "Providing best and newest technology possible, for the user comfort",
  },
  {
    type: "contact",
    subTitle:"CONTACT",
    title: "Reach Us",
    text: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
  },
]
