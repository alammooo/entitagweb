import { links } from "@/data/navLinks"
import { Navbar } from "flowbite-react"
import Link from "next/link"

export default function SmallNav() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="md:hidden">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex w-full flex-col gap-2">
          {links.map((el, i) => (
            <Link
            className=""
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
