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

        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="description"
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik dan friendly UX"
        />
        <meta
          name="google-site-verification"
          content="A0-IQ0YBZAtsyWwdy3FEcpW35Yan2aIkwE4Oj8w_Id4"
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="website, jasa, konsultasi, jasa pembuatan website, web application, landing page, company profile, mobile app, UX Friendly"
        />
        <meta
          name="author"
          content="Abdullah Alam"
        />
        <meta
          property="og:title"
          content="Entitag Technology"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:description"
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik dan friendly UX"
        />
        <meta
          property="og:url"
          content="https://entitagtech.com/"
        />
        <meta
          property="og:locale"
          content="id_ID"
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
