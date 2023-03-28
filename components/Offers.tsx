import { offerType } from "@/data/offerType"
import SectionHead from "./SectionHead"

export default function Offers() {
  function formatCurrency(amount: any, currency: string = "IDR"): string {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return formatter.format(amount)
  }
  return (
    <section
      className="bg-zinc-50 bg-opacity-80 py-14"
      id="Pricing">
      <SectionHead type="offer" />
      <div className="mx-auto grid max-w-6xl justify-center md:grid-cols-3 md:gap-10">
        {offerType.map((el, i) => (
          <div
            key={i}
            className={`mt-2 flex h-fit flex-col gap-5 overflow-hidden rounded-lg border-slate-50 bg-white text-center shadow-lg md:mt-7`}>
            <div
              className={`${
                i === 1 ? "bg-blue-800" : "bg-blue-500"
              } py-7 text-zinc-50`}>
              <h5 className="text-base font-medium">Mulai dari</h5>
              <h1 className="text-center text-4xl font-semibold">
                {formatCurrency(el.price)}
              </h1>
            </div>
            <div className="">
              <h1 className="my-2 text-center text-xl font-bold uppercase text-black">
                {el.type}
              </h1>
              <ul className="flex flex-col text-center">
                {el.benefit.map((el, i) => (
                  <li
                    className="border-b border-zinc-200 py-3 text-slate-500"
                    key={i}>
                    {el}
                  </li>
                ))}
              </ul>
              <button
                className={`mx-auto mb-10 mt-7 block w-full max-w-xs rounded py-2.5 text-center text-sm font-medium text-white shadow-lg duration-300 hover:scale-105 ${
                  i === 1
                    ? "bg-blue-800"
                    : "bg-gradient-to-r from-blue-400 to-blue-500"
                }`}>
                Purchase Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
