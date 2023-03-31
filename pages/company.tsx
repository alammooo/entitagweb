import Head from "next/head"
import React from "react"
import Process from "@/components/Process"
import { COMPANYPROFILE } from "@/interfaces/interfaces"
import FeaturesPricing from "@/components/fragments/FeaturesPricing"
import { AiFillFire } from "react-icons/ai"
import { bestFeatures } from "@/data/bestFeatures"
import { workTexts } from "@/data/workText"

export default function company() {
  return (
    <>
      <Head>
        <title>Entitag | Company Profile</title>
      </Head>
      <section className="md:my-24 pt-10 md:pt-0">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div className="p-3 md:p-0">
            <h1 className="mb-5 text-4xl font-extrabold text-blue-900">
              {workTexts[0].title}
            </h1>
            <p className="max-w-xl leading-7 text-slate-600">
              {workTexts[0].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[0].svgEle}</span>
        </div>
        <FeaturesPricing type={COMPANYPROFILE} />
        <div className="mx-auto mt-10 flex w-fit items-center justify-center gap-10 rounded border p-5 shadow">
          <h1 className="text-center text-xl font-semibold">Fitur Andalan</h1>
          <ul className="flex items-center gap-3 text-lg md:flex-row flex-col">
            {bestFeatures[1].map((item: string, i: number) => (
              <li
                className="flex items-center gap-2"
                key={i}>
                <AiFillFire />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Process />
      </section>
    </>
  )
}
