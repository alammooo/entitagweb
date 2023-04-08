import { offerType } from "@/data/offerType"
import SectionHead from "./SectionHead"
import { CheckIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import BlueBorder from "./fragments/BlueBorder"

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
      className="bg-blue-50 bg-opacity-50 py-5 md:py-14"
      id="Pricing">
      <p className="mx-auto block max-w-4xl border-blue-600 py-5 text-center text-2xl md:text-4xl leading-10 dark:text-white">
        Semua layanan dibawah{" "}
        <span className="font-black text-blue-600">gratis</span> pemeliharaan website
        <span className="font-black text-blue-600"> setahun penuh</span>
      </p>
      <div className="mx-auto h-0.5 w-1/3 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

      <div className="py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {offerType.map((el, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className={`mx-auto mt-4 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none lg:items-center ${
                i === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}>
              <div className="p-8 lg:flex-auto">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  {el.type}
                </span>
                <p className="mt-2 leading-7 text-gray-600">{el.text}</p>
                <div className="mt-2 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600 md:text-base">
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
              <div className="-mt-2 p-2 lg:mt-0 lg:h-full lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div
                  className={`h-full rounded-2xl bg-blue-800 py-10 text-center text-zinc-50 ring-1 ring-inset ring-gray-900/5 md:py-16 lg:flex lg:flex-col lg:justify-center`}>
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-sm font-semibold text-zinc-100 md:mb-3 md:text-base">
                      Mulai Dari
                    </p>
                    <p className="flex items-baseline justify-center gap-x-2">
                      <span className="text-3xl font-bold tracking-wide md:text-4xl">
                        {formatCurrency(el.price)}
                      </span>
                    </p>
                    <Link
                      title="Lihat Detail"
                      href={el.linkTo}
                      className="mt-6 block cursor-pointer rounded bg-white px-7 py-3 text-lg leading-5 text-gray-800 hover:bg-gray-50">
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
