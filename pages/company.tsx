import { workTexts } from "@/data/workText"
import Head from "next/head"
import React from "react"
import Process from "@/components/Process"
import { COMPANYPROFILE } from "@/interfaces/interfaces"
import FeaturesPricing from "@/fragments/FeaturesPricing"

export default function company() {
  return (
    <>
      <Head>
        <title>Company Profile</title>
      </Head>
      <section className="my-24">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div>
            <h1 className="mb-5 text-4xl font-extrabold text-blue-800">
              {workTexts[0].title}
            </h1>
            <p className="max-w-xl leading-7 text-zinc-500">
              {workTexts[0].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[0].svgEle}</span>
        </div>
        <FeaturesPricing type={COMPANYPROFILE} />
        <Process />
      </section>
    </>
  )
}
