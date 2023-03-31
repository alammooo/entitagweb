import { offerType } from "@/data/offerType"
import SectionHead from "./SectionHead"
import { CheckIcon } from "@heroicons/react/20/solid"

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
]

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
      <div className="py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {offerType.map((el, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className={`mx-auto mt-4 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none ${
                i === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}>
              <div className="p-8 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {el.type}
                </h3>
                <p className="mt-2 leading-7 text-gray-600">{el.text}</p>
                <div className="mt-2 flex items-center gap-x-4">
                  <h4 className="flex-none text-base font-semibold leading-6 text-blue-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-1 gap-3 text-base text-gray-600 sm:grid-cols-3">
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
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div
                  className={`rounded-2xl bg-blue-900 py-10 text-center text-zinc-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10`}>
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold">Starting from</p>
                    <p className="flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight">
                        {formatCurrency(el.price)}
                      </span>
                    </p>
                    <a
                      href="#"
                      className={`mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}>
                      Purchase Now
                    </a>
                    <p className="mt-6 cursor-pointer rounded bg-white px-3 py-2 text-base leading-5 text-gray-800 hover:bg-gray-50">
                      See more features
                    </p>
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
