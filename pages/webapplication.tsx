import Process from "@/components/Process"
import { workTexts } from "@/data/workText"
import FeaturesPricing from "@/components/fragments/FeaturesPricing"
import { WEBAPPLICATION } from "@/interfaces/interfaces"
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
            <h1 className="mb-5 text-4xl font-extrabold text-blue-900">
              {workTexts[1].title}
            </h1>
            <p className="max-w-xl leading-7 text-zinc-500">
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
