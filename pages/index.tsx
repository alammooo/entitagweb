import Head from "next/head"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import React from "react"
import Services from "@/components/Services"
import Offers from "@/components/Offers"
import Process from "@/components/Process"
import Works from "@/components/Works"
import Tech from "@/components/Tech"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BecomePart from "@/components/BecomePart"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [show, setShow] = React.useState<boolean>(false)
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
  return (
    <>
      <Head>
        <title>Entitag</title>
        <meta name="description" content="Enterprise website creator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="3LH65QcU8WCkUJcJDBXZs-s0kjmJhXlrj8dqQWzcauE" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/328/328198.png"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main className="scroll-smooth overflow-hidden">
        <Navbar show={show} />
        <Hero />
        <Services />
        <Offers />
        <Process />
        <Tech />
        <Works />
        <BecomePart />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  )
}
