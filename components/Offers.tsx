import { offerType } from "@/data/offerType"
import SectionHead from "./SectionHead"
import { CheckIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

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
      className="bg-blue-50 bg-opacity-50 py-14"
      id="Pricing">
      <SectionHead type="offer" />
      <div className="py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {offerType.map((el, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className={`mx-auto mt-4 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 lg:mx-0 lg:flex lg:items-center lg:max-w-none ${
                i === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}>
              <div className="p-8 lg:flex-auto">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  {el.type}
                </span>
                <p className="mt-2 leading-7 text-gray-600">{el.text}</p>
                <div className="mt-2 flex items-center gap-x-4">
                  <h4 className="flex-none md:text-base text-sm font-semibold leading-6 text-blue-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-3">
                  {el.benefit.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:h-full lg:max-w-md lg:flex-shrink-0">
                <div
                  className={`rounded-2xl bg-blue-800 h-full py-10 md:py-16 text-center text-zinc-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center`}>
                  <div className="mx-auto max-w-xs px-8">
                    <p className="md:text-base text-sm font-semibold text-zinc-100 md:mb-3">Mulai Dari</p>
                    <p className="flex items-baseline justify-center gap-x-2">
                      <span className="text-3xl md:text-4xl font-bold tracking-wide">
                        {formatCurrency(el.price)}
                      </span>
                    </p>
                    <Link title="Lihat Detail" href={el.linkTo} className="block mt-6 text-lg cursor-pointer rounded bg-white px-7 py-3 leading-5 text-gray-800 hover:bg-gray-50">
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
