import AppContext from "@/context/AppContext"
import { links } from "@/data/navLinks"
import Link from "next/link"
import React from "react"

export default function Hero() {
  const { openModal, toggleModal } = React.useContext(AppContext)
  return (
    <section className="bg-hero-pattern bg-cover text-white md:rounded-hero">
      <div className="h-full w-full rounded-hero bg-blue-900 bg-opacity-95">
        <div className="relative pb-36">
          <nav className={`top-0 mx-auto hidden w-full py-7 md:flex`}>
            <div className="container mx-auto flex max-w-6xl justify-between">
              <a
                href="#"
                className="text-3xl font-black uppercase tracking-wider">
                Entitag
              </a>
              <div className="flex gap-6 text-sm font-semibold">
                <a
                  href="#"
                  className="cursor-pointer text-blue-200">
                  Home
                </a>
                {links.map((link, i) => (
                  <Link
                    href={link.hrefTo}
                    className="cursor-pointer hover:text-blue-200"
                    key={i}>
                    {link.name}
                  </Link>
                ))}
                <span
                  className="cursor-pointer underline-offset-4 underline hover:text-blue-500"
                  onClick={toggleModal}>
                  Contact
                </span>
              </div>
            </div>
          </nav>
          <div className="mx-auto flex flex-col items-center gap-6 pt-20 text-center">
            <h4 className="text-2xl font-bold uppercase tracking-wide text-zinc-100">
              Entitag
            </h4>
            <h1 className="my-6 font-black tracking-wide 2xl:text-8xl">
              Web.
              <span className="bg-gradient-to-b from-blue-200 to-blue-50 bg-clip-text text-transparent">
                Appplication
              </span>
              .Creator.
            </h1>
            <p className="max-w-xl text-xl text-slate-200">
              Launch your campaign and benefit from our expertise on designing
              and managing your company with newest web technology
            </p>
            <div className="grid grid-cols-2 gap-7">
              <button
                type="button"
                className="rounded bg-white px-7 py-3.5 text-center text-sm font-medium text-blue-600 shadow-lg duration-300 hover:scale-105">
                Get Started Now
              </button>
              <button
                onClick={toggleModal}
                className="rounded bg-blue-500 px-7 py-3.5 text-center text-sm font-medium text-white shadow-lg duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
