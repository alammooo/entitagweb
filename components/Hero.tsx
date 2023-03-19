import { links } from "@/data/navLinks"
import Link from "next/link"
import HeroCards from "./HeroCards"

export default function Hero() {
  return (
    <section className="md:rounded-hero bg-hero-pattern bg-cover text-white bg-blue-900 to bg-blend-multiply">
      <div className="relative pb-52">
        <nav className={`top-0 mx-auto hidden w-full py-7 md:flex`}>
          <div className="container mx-auto flex max-w-6xl justify-between">
            <a href="#" className="text-xl font-black uppercase tracking-wider">
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
        <div className="mx-auto pt-20 flex max-w-xl flex-col items-center gap-6 text-center">
          <h4 className="font-bold uppercase tracking-wider">
            Entitag Creator
          </h4>
          <h1 className="text-4xl font-bold leading-10 tracking-wide">
            Company Page and Web Application creator for your business
          </h1>
          <p className="text-slate-300">
            Launch your campaign and benefit from our expertise on designing and
            managing your company with newest web technology
          </p>
          <button
            type="button"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br hover:scale-105 duration-100 will">
            Get Started Now
          </button>
        </div>
        <HeroCards />
      </div>
    </section>
  )
}
