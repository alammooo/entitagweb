import Process from "@/components/Process"
import { workTexts } from "@/data/workText"
import FeaturesPricing from "@/components/fragments/FeaturesPricing"
import { WEBAPPLICATION } from "@/interfaces/interfaces"
import Head from "next/head"

export default function webapplication() {
  return (
    <>
      <Head>
        <title>Entitag | Application Development</title>
      </Head>
      <section className="md:my-24 pt-10">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div className="p-5 md:p-0">
            <h1 className="mb-5 text-4xl font-extrabold text-blue-900">
              {workTexts[1].title}
            </h1>
            <p className="max-w-xl leading-7 text-slate-600">
              {workTexts[1].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[1].svgEle}</span>
        </div>
        <FeaturesPricing type={WEBAPPLICATION} />
        <Process />
      </section>
    </>
  )
}
