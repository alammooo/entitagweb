import { services } from "@/data/services"
import BlueBorder from "./BlueBorder"
import SectionHead from "./SectionHead"

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl py-20 text-center">
      <SectionHead type="services" />
      <div className="mt-10 grid grid-cols-3 gap-3">
        {services.map((e, i) => (
          <div
            key={i}
            className={`${
              i % 2 !== 0 ? "border border-slate-50 shadow-lg" : ""
            } flex flex-col gap-5 rounded py-10 px-7 hover:bg-sky-50`}>
            <h1 className="text-lg font-medium">{e.title}</h1>
            <BlueBorder />
            <p className="px-3 text-sm leading-6 text-slate-400">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
