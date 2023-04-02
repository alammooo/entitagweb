import {
  companyProfilePrice,
  onlineshopPrice,
  webAppPrice,
} from "@/data/featurePricingData"
import formatCurrency from "@/helpers/formatCurrency"
import {
  COMPANYPROFILE,
  ONLINESHOP,
  WEBAPPLICATION,
} from "@/interfaces/interfaces"
import { useRouter } from "next/router"
import React from "react"

export default function FeaturesPricing({ type }: any) {
  const nav = useRouter()
  const [listData, setListData] = React.useState<any>()
  React.useEffect(() => {
    switch (type) {
      case COMPANYPROFILE:
        setListData(companyProfilePrice)
        break
      case ONLINESHOP:
        setListData(onlineshopPrice)
        break
      case WEBAPPLICATION:
        setListData(webAppPrice)
        break
      default:
        break
    }
  }, [type])

  return (
    <div
      className={`mx-auto grid max-w-6xl justify-center md:grid-cols-3 md:gap-10`}>
      {listData?.map((el: any, i: number) => (
        <div
          key={i}
          className={`order-first flex flex-col rounded-3xl px-6 py-8 text-slate-200 sm:px-8 lg:order-none ${
            i === 1 ? "bg-blue-600" : "bg-blue-950"
          }`}>
          <h3 className="order-first text-4xl font-semibold tracking-tight text-white">
            {typeof el.price === "number"
              ? formatCurrency(el.price)
              : "Konsultasi Gratis"}
          </h3>
          <h2 className="font-display mt-5 text-lg font-medium capitalize">
            {el.type}
          </h2>
          <h2 className="mt-2 text-sm capitalize md:text-base">
            {el.description}
          </h2>
          <a
          title="Pesan Sekarang"
            onClick={() => nav.push("/contacts")}
            className="group mt-8 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-blue-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-200 active:text-slate-600 dark:border dark:border-white md:text-base">
            Pesan Sekarang
          </a>
          <ul className="order-last mt-10 flex flex-col gap-y-3">
            {el.benefit.map((e: any, i: number) => (
              <li
                className="flex"
                key={i}>
                <svg className="h-6 w-6 flex-none fill-current stroke-current">
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"></circle>
                </svg>
                <span className="ml-4">{e}</span>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      ))}
    </div>
  )
}
