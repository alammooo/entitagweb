import AppContext from "@/context/AppContext"
import { links } from "@/data/navLinks"
import Link from "next/link"
import React from "react"
import EntitagLogo from "@/public/favicon.ico"
import Image from "next/image"

export default function Hero() {
  /* Layanan pembuatan website dan aplikasi mobile yang terbaik untuk membantu bisnis Anda tumbuh dan berkembang.
-Kami membantu Anda menghadirkan brand Anda ke pasar digital dengan tampilan yang menarik dan fungsionalitas yang optimal.
-Solusi terbaik untuk membangun website company profile dan toko online Anda yang mudah diakses dan responsif pada segala perangkat.
-Dapatkan website dan aplikasi mobile terbaik dengan proses pengerjaan yang mudah dan cepat.
-Kami mengembangkan aplikasi mobile untuk bisnis Anda, sehingga dapat menjangkau pelanggan dengan cara yang lebih mudah dan efisien. */
  const { openModal, toggleModal, show } = React.useContext(AppContext)
  return (
    <section className="flex flex-col justify-between bg-hero-pattern bg-cover text-zinc-800 md:h-screen">
      <div className="h-full w-full bg-white bg-opacity-50">
        <div className="relative pb-40 md:pb-0 md:pt-0">
          <nav
            className={`top-0 mx-auto hidden w-full py-7 duration-500 md:flex ${
              show ? "opacity-0" : "opacity-100"
            }`}>
            <div className="container mx-auto flex max-w-6xl justify-between">
              <Link
                href="/"
                className="text-2xl font-bold uppercase tracking-wider flex items-center gap-2">
                <Image src={EntitagLogo} alt="entitagLogo" className="w-7 h-7"/> Entitag
              </Link>
              <div className="flex gap-6 md:text-base text-sm font-semibold">
                {links.map((link, i) => (
                  <Link
                    href={link.hrefTo}
                    className="cursor-pointer hover:text-blue-200"
                    key={i}>
                    {link.name}
                  </Link>
                ))}
                <span
                  className="cursor-pointer underline underline-offset-4 hover:text-blue-500"
                  onClick={toggleModal}>
                  Contact
                </span>
              </div>
            </div>
          </nav>
          <div className="mx-auto flex flex-col items-center gap-5 text-center md:gap-6 2xl:pt-20">
            <h1 className="my-6 text-5xl font-black tracking-wide md:text-6xl 2xl:text-8xl">
              Web.
              <br className="block md:hidden" />
              <span className="bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Appplication. <br />
              </span>
              Creator.
            </h1>
            <p className="max-w-xl text-xl">
              Kami menawarkan layanan pembuatan website dan aplikasi bisnis
              terbaik yang membantu bisnis Anda tumbuh dan berkembang dengan
              tampilan yang menarik dan fungsionalitas yang optimal.
            </p>

            <button
              onClick={toggleModal}
              className="rounded bg-blue-500 px-14 py-3.5 text-center font-medium text-white shadow-lg duration-300 hover:bg-blue-600">
              Contact Us
            </button>
            <a
              href="#Pricing"
              className="rounded border border-blue-400 px-14 py-3.5 text-center font-medium text-blue-800 shadow duration-300 hover:bg-blue-400">
              Lihat Penawaran
            </a>
          </div>
        </div>
      </div>
      <div className="h-16 w-full bg-blue-500 text-white"></div>
    </section>
  )
}
