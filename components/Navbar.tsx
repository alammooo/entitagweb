import AppContext from "@/context/AppContext"
import { links } from "@/data/navLinks"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import EntitagLogo from "@/public/favicon.ico"
import Image from "next/image"

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
          className="text-2xl font-black uppercase tracking-wider flex gap-2 items-center">
         <Image src={EntitagLogo} alt="entitag-logo" className="w-8 h-8"/> Entitag
        </Link>
        <div className="flex gap-6 text-base font-semibold text-zinc-600">
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
            className="cursor-pointer text-blue-700 hover:text-blue-900"
            onClick={toggleModal}>
            Contact
          </span>
        </div>
      </div>
    </nav>
  )
}
