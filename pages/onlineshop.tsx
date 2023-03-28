import Process from "@/components/Process"
import { workTexts } from "@/data/workText"
import FeaturesPricing from "@/fragments/FeaturesPricing"
import { ONLINESHOP } from "@/interfaces/interfaces"
import Head from "next/head"

export default function onlineshop() {
  return (
    <>
      <Head>
        <title>Online Shop</title>
      </Head>
      <section className="my-24">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div>
            <h1 className="mb-5 text-4xl font-extrabold text-blue-800">
              {workTexts[2].title}
            </h1>
            <p className="max-w-xl leading-7 text-zinc-500">
              {workTexts[2].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[2].svgEle}</span>
        </div>
        <FeaturesPricing type={ONLINESHOP} />
        <Process />
      </section>
    </>
  )
}
