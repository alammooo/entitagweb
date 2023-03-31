import { links } from "@/data/navLinks"
import { Navbar } from "flowbite-react"
import Link from "next/link"

export default function SmallNav() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="md:hidden fixed w-screen h-screen z-50">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <h1 className="text-center text-2xl font-bold mb-5">
          Entitag
        </h1>
        <div className="flex w-full flex-col gap-2 text-center text-xl text-blue-900">
          {links.map((el, i) => (
            <Link
            className="border-b py-4"
              href={el.hrefTo}
              key={i}>
              {el.name}
            </Link>
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
