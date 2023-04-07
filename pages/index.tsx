import Head from "next/head"
import { Inter } from "next/font/google"
import React from "react"
import Services from "@/components/Services"
import Offers from "@/components/Offers"
import Process from "@/components/Process"
import Tech from "@/components/Tech"
import Projects from "@/components/Projects"
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Entitag | Jasa Pembuatan Website dan Aplikasi Web</title>
        <meta
          name="description"
          content="Entitag Technology, jasa pembuatan website dan aplikasi web untuk bisnis anda, menggunakan teknologi terkini yang memberikan pengalaman terbaik dan performa terbaik untuk website dan aplikasi web anda"
        />
      </Head>
      <section className="overflow-hidden scroll-smooth pt-8 dark:text-white md:pt-0">
        <Hero />
        <Services />
        <Offers />
        <Projects />
        <Tech />
      </section>
    </>
  )
}
