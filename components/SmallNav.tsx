import { links } from "@/data/navLinks"
import { Navbar } from "flowbite-react"
import Link from "next/link"

export default function SmallNav() {
  function closeNav(){

  }
  return (
    <Navbar
      fluid={true}
      className="md:hidden fixed z-50 w-screen shadow mt-0">
      <Navbar.Toggle />
      <h1 className="text-center text-2xl font-bold">Entitag</h1>
      <Navbar.Collapse className="w-screen h-screen">
        <div className="flex w-full flex-col gap-2 text-center text-xl text-blue-900">
          {links.map((el, i) => (
            <Link
            className="border-b py-4"
              href={el.hrefTo}
              key={i} 
              onClick={closeNav}>
              {el.name}
            </Link>
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
