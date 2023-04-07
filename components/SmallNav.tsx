import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { links } from "@/data/navLinks"
import Link from "next/link"

export default function SmallNav() {
  return (
    <div className="fixed z-50 w-screen text-right md:hidden">
      <Menu
        as="div"
        className="relative">
        <Menu.Button className="inline-flex w-full justify-between bg-white p-3 font-medium text-black shadow focus:outline-none">
          <RxHamburgerMenu
            className="-mr-1 ml-2 h-5 w-5 text-blue-600"
            aria-hidden="true"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute h-screen w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {links.map((el, i) => (
              <div
                className="px-1 py-1"
                key={i}>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      title={el.name}
                      href={el.hrefTo}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-xl`}>
                      {el.name}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
