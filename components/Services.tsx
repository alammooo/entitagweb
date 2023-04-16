import { services } from "@/data/services"
import SectionHead from "./SectionHead"
import Image from "next/image"
import BlueBorder from "./fragments/BlueBorder"

export default function Services() {
  return (
    <section
      id="Services"
      className="pt-7">
      <blockquote className="mx-auto flex max-w-3xl flex-col font-medium text-gray-900 dark:text-white">
        <svg
          aria-hidden="true"
          className="h-10 w-10 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-center text-3xl leading-10 md:text-4xl">
          Kami akan membantu anda membuat website dari ide hingga tampil di
          google
        </p>
        <svg
          aria-hidden="true"
          className="h-10 w-10 rotate-180 self-end text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
      </blockquote>

      <div className="mx-auto max-w-6xl pb-24 text-center">
        <div
          className="mt-10 grid gap-3 md:grid-cols-3"
          data-aos="fade-up">
          {services.map((e, i) => (
            <div
              key={i}
              className={`${
                i % 2 !== 0
                  ? "border border-zinc-200 bg-white shadow-lg hover:bg-sky-50"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } flex flex-col gap-2 rounded px-7 py-5 `}>
              <i className="mx-auto flex w-28">
                <Image
                  src={e.icon}
                  alt={e.title}
                  className="self-center"
                />
              </i>
              <h2 className="text-lg font-medium">{e.title}</h2>
              <p className="px-3 text-sm leading-6">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
