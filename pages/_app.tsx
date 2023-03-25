import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"
import React from "react"
import AppContext from "@/context/AppContext"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const [show, setShow] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState(false)
  const router = useRouter()
  function toggleModal() {
    setOpenModal(!openModal)
  }
  React.useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [show])

  React.useEffect(() => {
    function handleIfNoScroll() {
      if (router.pathname !== "/") {
        const isTop = window.scrollY < window.innerHeight
        setShow(isTop)
      } else setShow(false)
    }
    handleIfNoScroll()
  }, [router.pathname])

  return (
    <>
      <AppContext.Provider value={{ openModal, toggleModal }}>
        <Navbar show={show} />
        <Component {...pageProps} />
        <Analytics />
      </AppContext.Provider>
    </>
  )
}
