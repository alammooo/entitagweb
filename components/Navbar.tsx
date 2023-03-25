import AppContext from "@/context/AppContext"
import { links } from "@/data/navLinks"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export default function Navbar({ show }: any) {
  const { openModal, toggleModal } = React.useContext(AppContext)
  const router = useRouter()

  return (
    <nav
      className={`${
        show ? "h-fit py-4" : "h-0 -translate-y-20"
      } fixed top-0 z-50 mx-auto hidden w-full bg-white bg-opacity-90 shadow-md backdrop-blur-md duration-300 md:flex`}>
      <div className="container mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black uppercase tracking-wider">
          Entitag
        </Link>
        <div className="flex gap-6 text-sm font-semibold text-zinc-600">
          {links.map((link) => (
            <Link
              href={link.hrefTo}
              className={`cursor-pointer hover:text-blue-500 ${
                router.pathname === link.hrefTo ? "text-blue-500" : ""
              }`}
              key={link.name}>
              {link.name}
            </Link>
          ))}
          <span
            className="cursor-pointer text-blue-700 hover:text-blue-800"
            onClick={toggleModal}>
            Contact
          </span>
        </div>
      </div>
    </nav>
  )
}
