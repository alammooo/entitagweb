import { services } from "@/data/services"
import SectionHead from "./SectionHead"
import Image from "next/image"
import BlueBorder from "./fragments/BlueBorder"

export default function Services() {
  return (
    <section
      id="Services"
      className="md:mt-5">
      <SectionHead type="services" />
      <div className="mx-auto max-w-6xl pt-5 pb-24 text-center">
        <div
          className="mt-10 grid gap-3 md:grid-cols-3"
          data-aos="fade-up">
          {services.map((e, i) => (
            <div
              key={i}
              className={`${
                i % 2 !== 0 ? "border border-zinc-100 shadow-lg" : ""
              } flex flex-col gap-4 rounded px-7 py-8 hover:bg-sky-50`}>
              <Image
                src={e.icon}
                width={60}
                alt={e.title}
                className="self-center"
              />
              <h1 className="text-lg font-medium">{e.title}</h1>
              <BlueBorder />
              <p className="px-3 text-base leading-6 text-zinc-400">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
