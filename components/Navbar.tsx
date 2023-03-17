import { links } from "@/data/navLinks"
import Link from "next/link"

export default function Navbar({ show }: any) {
  return (
    <nav
      className={`${
        show ? "h-fit py-4" : "h-0 -translate-y-20"
      } fixed top-0 z-50 mx-auto w-full bg-white shadow-lg duration-300`}>
      <div className="container mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="text-xl font-black uppercase tracking-wider">
          Entitag
        </a>
        <ul className="flex gap-6 text-sm font-semibold text-zinc-600">
          <a href="#" className="cursor-pointer text-blue-500">
            Home
          </a>
          {links.map((link) => (
            <a
              href={`#${link}`}
              className="cursor-pointer hover:text-blue-500"
              key={link}>
              {link}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  )
}
