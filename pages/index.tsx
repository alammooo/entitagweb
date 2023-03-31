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
      </Head>
        <main className="overflow-hidden scroll-smooth">
          <Hero />
          <Services />
          <Offers />
          <Process />
          <Projects />
          <Tech />
        </main>
    </>
  )
}
