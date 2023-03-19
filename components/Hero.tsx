import { links } from "@/data/navLinks"
import Link from "next/link"
import HeroCards from "./HeroCards"

export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover md:rounded-hero text-white">
      <div className="h-full w-full rounded-hero bg-blue-900 bg-opacity-95">
        <div className="relative pb-52">
          <nav className={`top-0 mx-auto hidden w-full py-7 md:flex`}>
            <div className="container mx-auto flex max-w-6xl justify-between">
              <a
                href="#"
                className="text-2xl font-black uppercase tracking-wider">
                Entitag
              </a>
              <ul className="flex gap-6 text-sm font-semibold">
                <a href="#" className="cursor-pointer text-blue-200">
                  Home
                </a>
                {links.map((link, i) => (
                  <a
                    href={`#${link}`}
                    className="cursor-pointer hover:text-blue-200"
                    key={i}>
                    {link}
                  </a>
                ))}
              </ul>
            </div>
          </nav>
          <div className="mx-auto flex flex-col items-center gap-6 pt-20 text-center">
            <h4 className="text-xl font-bold uppercase tracking-wide text-zinc-100">
              Entitag Creator
            </h4>
            <h1 className="my-6 2xl:text-8xl font-black tracking-wide">
              Web.<span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-50">Appplication</span>.Creator.
            </h1>
            <p className="max-w-xl text-slate-200">
              Launch your campaign and benefit from our expertise on designing
              and managing your company with newest web technology
            </p>
            <button
              type="button"
              className="rounded bg-white text-blue-600 px-7 py-3.5 text-center text-sm font-medium shadow-lg duration-300 hover:scale-105">
              Get Started Now
            </button>
          </div>
          <HeroCards />
        </div>
      </div>
    </section>
  )
}
