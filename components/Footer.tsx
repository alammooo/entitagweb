import { links } from "@/data/navLinks"
import entitagLogo from "@/public/favicon.ico"
import Image from "next/image"
import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { HiOutlineMailOpen } from "react-icons/hi"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="container mx-auto w-full py-16 pl-7 md:pl-0">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="flex items-center">
              <Image
                src={entitagLogo}
                alt="entitagLogo"
                width={50}
                height={50}
              />
              <span className="self-center whitespace-nowrap text-2xl font-bold">
                Entitag
              </span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 sm:gap-6 md:gap-48">
            <div className="flex flex-col gap-2">
              <h2 className="mb-4 text-lg font-semibold uppercase">Contact</h2>
              <p className="flex items-center gap-2">
                <BsWhatsapp />
                +62 851-5657-9033
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineMailOpen />
                info@entitagtech.com
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-2 md:mt-0">
              <h2 className="mb-4 text-lg font-semibold uppercase">Links</h2>
              {links.map((el, i) => (
                <Link
                  key={i}
                  href={el.hrefTo}
                  className="flex items-center gap-2">
                  {el.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center md:text-base">
            © 2023 . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-white">
              <FaLinkedin className="w-5 h-5 fill-white"/>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/alammooo"
              target="_blank"
              className="text-white">
              <svg
                className="h-5 w-5 fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
