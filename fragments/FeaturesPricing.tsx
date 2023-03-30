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
import React from "react"

export default function FeaturesPricing({ type }: any) {
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
          className={`mt-2 flex h-fit flex-col gap-5 overflow-hidden rounded-lg border-slate-50 bg-white text-center shadow-lg md:mt-7 ${
            el.length < 2 ? "col-end-3" : ""
          }`}>
          <div
            className={`${
              i === 1 ? "bg-blue-800" : "bg-blue-500"
            } py-7 text-zinc-50`}>
            <h5 className="text-base font-medium">Mulai dari</h5>
            <h1 className="text-center text-4xl font-semibold">
              {typeof el.price === "number"
                ? formatCurrency(el.price)
                : "Contact Us"}
            </h1>
          </div>
          <div className="">
            <h1 className="my-2 text-center text-xl font-bold uppercase text-black">
              {el.type}
            </h1>
            <ul className="flex flex-col text-center">
              {el.benefit.map((el: any, i: number) => (
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
  )
}
