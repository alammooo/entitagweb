import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"
import React from "react"
import AppContext from "@/context/AppContext"
import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import Whatsapp from "@/components/fragments/Whatsapp"
import SmallNav from "@/components/SmallNav"
import AOS from "aos"
import "aos/dist/aos.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [show, setShow] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  function toggleModal() {
    setOpenModal(!openModal)
  }
  React.useEffect(() => {
    function handleScroll() {
      if (router.pathname === "/" || router.pathname === "") {
        const scrollPosition = window.scrollY
        if (scrollPosition > 100) {
          setShow(true)
        } else {
          setShow(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [router.pathname])

  React.useEffect(() => {
    if (router.pathname !== "/") {
      setShow(true)
    } else setShow(false)
  }, [router.pathname])

  React.useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom",
    })
  }, [])

  return (
    <>
      <AppContext.Provider value={{ openModal, toggleModal, show }}>
        <main className={inter.className}>
          <Navbar show={show} />
          <SmallNav />
          <Whatsapp />
          <Component {...pageProps} />
          <Footer />
        </main>
      </AppContext.Provider>
    </>
  )
}
