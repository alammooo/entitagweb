import Head from "next/head"
import { Inter } from "next/font/google"
import Hero from "@/components/Hero"
import React from "react"
import Services from "@/components/Services"
import Offers from "@/components/Offers"
import Process from "@/components/Process"
import Tech from "@/components/Tech"
import Projects from "@/components/Projects"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Entitag | Jasa Pembuatan Website dan Aplikasi Web</title>
        <meta
          name="description"
          content="Entitag Technology, jasa pembuatan website dan aplikasi web untuk bisnis anda, menggunakan teknologi terkini yang memberikan pengalaman terbaik dan performa terbaik untuk website dan aplikasi web anda"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="google-site-verification"
          content="3LH65QcU8WCkUJcJDBXZs-s0kjmJhXlrj8dqQWzcauE"
        />
        <meta name="robots" content="index, follow"/>
      </Head>
        <section className="overflow-hidden scroll-smooth pt-8 md:pt-0 dark:text-white">
          <Hero />
          <Services />
          <Offers />
          <Process />
          <Projects />
          <Tech />
        </section>
    </>
  )
}
