import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"
import React from "react"
import AppContext from "@/context/AppContext"
import { useRouter } from "next/router"
import MyModal from "@/components/ContactModal"
import Footer from "@/components/Footer"

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
    }
  }, [router.pathname])

  return (
    <>
      <AppContext.Provider value={{ openModal, toggleModal }}>
        <Navbar show={show} />
        <Component {...pageProps} />
        <Footer />
        <MyModal />
        <Analytics />
      </AppContext.Provider>
    </>
  )
}
