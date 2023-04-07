import Process from "@/components/Process"
import { workTexts } from "@/data/workText"
import FeaturesPricing from "@/components/fragments/FeaturesPricing"
import { ONLINESHOP, ONLINESHOPFEATURES } from "@/interfaces/interfaces"
import Head from "next/head"
import BestFeatures from "@/components/features/BestFeatures"

export default function onlineshop() {
  return (
    <>
      <Head>
        <title>Entitag | Toko Online</title>
      </Head>
      <section className="pt-8 dark:text-white md:my-24 md:pt-0">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div className="p-5 md:p-0">
            <h2 className="mb-5 text-4xl font-extrabold text-blue-900">
              {workTexts[2].title}
            </h2>
            <p className="max-w-xl leading-7 text-slate-600">
              {workTexts[2].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[2].svgEle}</span>
        </div>
        <FeaturesPricing type={ONLINESHOP} />
        <BestFeatures type={ONLINESHOPFEATURES} />
        <Process />
      </section>
    </>
  )
}
