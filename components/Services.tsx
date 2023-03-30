import { services } from "@/data/services"
import BlueBorder from "./BlueBorder"
import SectionHead from "./SectionHead"
import Image from "next/image"

export default function Services() {
  return (
    <section
      className="mx-auto max-w-6xl py-24 text-center md:mt-0"
      id="Services">
      <SectionHead type="services" />
      <div className="mt-10 grid gap-3 md:grid-cols-3" data-aos="fade-up">
        {services.map((e, i) => (
          <div
            key={i}
            className={`${
              i % 2 !== 0 ? "border border-zinc-100 shadow-lg" : ""
            } flex flex-col gap-4 rounded py-8 px-7 hover:bg-sky-50`}>
            <Image
              src={e.icon}
              width={60}
              alt={e.title}
              className="self-center"
            />
            <h1 className="text-lg font-medium">{e.title}</h1>
            <BlueBorder />
            <p className="px-3 text-sm leading-6 text-zinc-400">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
