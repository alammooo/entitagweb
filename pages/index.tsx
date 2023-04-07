import Head from "next/head"
import React from "react"
import Services from "@/components/Services"
import Offers from "@/components/Offers"
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
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
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
