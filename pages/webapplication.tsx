import { offerType } from "@/data/offerType"
import { workTexts } from "@/data/workText"
import formatCurrency from "@/helpers/formatCurrency"
import Head from "next/head"

export default function webapplication() {
  return (
    <>
      <Head>
        <title>Web Application</title>
      </Head>
      <section className="my-24">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div>
            <h1 className="mb-5 text-4xl font-extrabold text-blue-800">
              {workTexts[1].title}
            </h1>
            <p className="max-w-xl leading-7 text-zinc-500">
              {workTexts[1].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[1].svgEle}</span>
        </div>
        <div className="mx-auto grid max-w-6xl justify-center md:grid-cols-3 md:gap-10">
          {offerType.map((el, i) => (
            <div
              key={i}
              className={`mt-2 flex h-fit flex-col gap-5 rounded border-slate-50 bg-white text-center shadow-lg md:mt-7`}>
              <div
                className={`${
                  i === 1 ? "bg-blue-800" : "bg-blue-500"
                } py-7 text-zinc-50`}>
                <h5 className="text-base font-medium">Mulai dari</h5>
                <h1 className="text-center text-4xl font-semibold">
                  {formatCurrency(el.price)}
                </h1>
              </div>
              <div className="px-16">
                <h1 className="text-center text-lg font-semibold uppercase text-black">
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
                  className={`mb-10 mt-7 w-full rounded py-2.5 text-center text-sm font-medium text-white shadow-lg duration-300 hover:scale-105 ${
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
    </>
  )
}
