import AppContext from "@/context/AppContext"
import { links } from "@/data/navLinks"
import Link from "next/link"
import React from "react"
import EntitagLogo from "@/public/favicon.ico"
import Image from "next/image"
import HeroImage from "./heroimg.svg"

export default function Hero() {
  const { show } = React.useContext(AppContext)
  return (
    <section className="flex flex-col justify-between bg-hero-pattern bg-cover text-zinc-800 md:h-screen">
      <div className="h-full w-full bg-lime-50 bg-opacity-80 py-10 md:py-0">
        <nav
          className={`top-0 mx-auto hidden w-full py-7 duration-500 md:flex ${
            show ? "opacity-0" : "opacity-100"
          }`}>
          <div className="container mx-auto flex max-w-6xl justify-between">
            <Link
              title="entitagLogo"
              href="/"
              className="flex items-center gap-2 text-2xl font-bold uppercase tracking-wider">
              <Image
                src={EntitagLogo}
                alt="entitagLogo"
                className="h-7 w-7"
              />{" "}
              Entitag
            </Link>
            <div className="flex gap-6 text-sm font-semibold md:text-base">
              {links.map((link, i) => (
                <Link
                  title="entitag links"
                  href={link.hrefTo}
                  className={`cursor-pointer hover:text-blue-500 ${
                    link.name === "Home" ? "text-blue-500" : ""
                  } `}
                  key={i}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="container mx-auto grid md:grid-cols-2 items-center">
          <div className="mx-auto flex flex-col gap-5 md:gap-10 items-center md:items-start">
            <h1 className="text-5xl font-bold tracking-wide md:text-3xl 2xl:text-7xl">
              Web.
              <br className="block md:hidden" />
              <span className="bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Appplication. <br />
              </span>
              Creator.
            </h1>
            <p className="max-w-xl text-lg text-zinc-500 text-center md:text-left px-5 md:px-0">
              Kami menawarkan jasa pembuatan website dan aplikasi bisnis terbaik
              yang membantu bisnis Anda tumbuh dan berkembang dengan tampilan
              yang menarik dan fungsionalitas yang optimal.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                title="Konsultasi Gratis"
                href={"/contacts"}
                className="w-fit rounded bg-blue-500 px-14 py-3.5 text-center font-medium text-white shadow-lg duration-300 hover:bg-blue-600">
                Konsultasi Gratis
              </Link>
              <a
                title="Penawaran Kami"
                href="#Pricing"
                className="w-fit rounded border border-blue-400 px-14 py-3.5 text-center font-medium text-blue-800 shadow duration-300 hover:bg-blue-400">
                Lihat Penawaran
              </a>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={HeroImage}
              className="h-full w-full"
              alt="heroimage"
            />
          </div>
        </div>
      </div>
      {/* <div className="h-16 w-full bg-blue-500 text-white"></div> */}
    </section>
  )
}
