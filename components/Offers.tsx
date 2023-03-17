import { offerType } from "@/data/offerType"
import SectionHead from "./SectionHead"

export default function Offers() {
  return (
    <section className="bg-zinc-50 bg-opacity-80 py-20" id="Pricing">
      <SectionHead type="offer" />
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5">
        {offerType.map((el, i) => (
          <div
            className={`mt-28 flex flex-col gap-10 rounded border-slate-50 bg-white p-12 text-center shadow-lg ${
              i === 1 ? "scale-110" : ""
            }`}>
            <h1 className="text-sm uppercase text-slate-600">{el.type}</h1>
            <h1 className="mx-auto w-fit rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-3xl font-bold text-white">
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
            <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300">
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
