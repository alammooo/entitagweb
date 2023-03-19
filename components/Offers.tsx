import { offerType } from "@/data/offerType"
import SectionHead from "./SectionHead"

export default function Offers() {
  return (
    <section className="bg-zinc-50 bg-opacity-80 py-20" id="Pricing">
      <SectionHead type="offer" />
      <div className="mx-auto grid max-w-6xl px-5 md:grid-cols-3 md:gap-10">
        {offerType.map((el, i) => (
          <div
            key={i}
            className={`mt-5 flex flex-col gap-10 rounded border-slate-50 bg-white p-12 text-center shadow-lg md:mt-28 ${
              i === 1 ? "md:scale-110" : ""
            }`}>
            <h1 className="text-sm uppercase text-slate-600 font-semibold">{el.type}</h1>
            <h1 className="mx-auto w-fit rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-4xl font-semibold text-white">
              IDR {el.price},-
            </h1>

            <ul className="flex flex-col gap-1 text-sm">
              {el.benefit.map((el, i) => (
                <li
                  className="border-b border-zinc-200 py-3 text-slate-500"
                  key={i}>
                  {el}
                </li>
              ))}
            </ul>
            <button className="rounded bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-3.5 text-center text-sm font-medium text-white shadow-lg duration-300 hover:scale-105">
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
