import LandingPageSvg from "@/svg/LandingPageSvg"
import MobileAppSvg from "@/svg/MobileAppSvg"
import WebAppSvg from "@/svg/WebAppSvg"

export const workTexts = [
  {
    type: 1,
    title: "Company Page",
    text: `We made create-t3-app to do one thing: Streamline the setup of
    typesafe Next.js apps WITHOUT compromising modularity. After
    countless projects and many years on this tech, we have lots of
    opinions and insights. We've done our best to encode them into this
    CLI. This is NOT an all-inclusive template. We expect you to bring
    your own libraries. Check out our other recommendations for things
    like state management and deployment.`,
    svgEle: <LandingPageSvg />,
  },
  {
    type: 2,
    title: "Web Application",
    text: `We made create-t3-app to do one thing: Streamline the setup of
    typesafe Next.js apps WITHOUT compromising modularity. After
    countless projects and many years on this tech, we have lots of
    opinions and insights. We've done our best to encode them into this
    CLI. This is NOT an all-inclusive template. We expect you to bring
    your own libraries. Check out our other recommendations for things
    like state management and deployment.`,
    svgEle: <WebAppSvg />,
  },
  {
    type: 3,
    title: "Mobile Application",
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
