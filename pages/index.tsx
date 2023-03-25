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
import Footer from "@/components/Footer"
import Projects from "@/components/Projects"
import MyModal from "@/components/ContactModal"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Entitag Technology</title>
        <meta
          name="description"
          content="Enterprise website creator"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="google-site-verification"
          content="3LH65QcU8WCkUJcJDBXZs-s0kjmJhXlrj8dqQWzcauE"
        />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/328/328198.png"
        />
      </Head>
        <main className="overflow-hidden scroll-smooth">
          <Hero />
          <Services />
          <Offers />
          <Process />
          <Works />
          <Projects />
          <Tech />
          <Footer />
          <MyModal />
        </main>
    </>
  )
}
