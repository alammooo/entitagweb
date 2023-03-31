import AppContext from "@/context/AppContext"
import { links } from "@/data/navLinks"
import Link from "next/link"
import React from "react"

export default function Hero() {
  const { openModal, toggleModal } = React.useContext(AppContext)
  return (
    <section className="flex h-screen flex-col justify-between bg-hero-pattern bg-cover text-zinc-700">
      <div className="h-full w-full">
        <div className="relative">
          <nav className={`top-0 mx-auto hidden w-full py-7 md:flex`}>
            <div className="container mx-auto flex max-w-6xl justify-between">
              <Link
                href="/"
                className="text-3xl font-black uppercase tracking-wider">
                Entitag
              </Link>
              <div className="flex gap-6 text-sm font-semibold">
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
          <div className="mx-auto flex flex-col items-center gap-2 pt-20 text-center md:gap-6">
            <h4 className="text-2xl font-bold uppercase tracking-wide">
              ENTITAG TECHNOLOGY
            </h4>
            <h1 className="my-6 text-2xl font-bold tracking-wide 2xl:text-8xl">
              Web.
              <span className="bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Appplication. <br />
              </span>
              Creator.
            </h1>
            <p className="max-w-xl text-xl text-slate-500">
              Launch your campaign and benefit from our expertise on designing
              and managing your company with newest web technology
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
