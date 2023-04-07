import Head from "next/head"
import React from "react"
import Process from "@/components/Process"
import { COMPANYPROFILE, COMPANYPROFILEFEATURE } from "@/interfaces/interfaces"
import FeaturesPricing from "@/components/fragments/FeaturesPricing"
import { AiFillFire } from "react-icons/ai"
import { bestFeatures } from "@/data/bestFeatures"
import { workTexts } from "@/data/workText"
import SectionHead from "@/components/SectionHead"
import BestFeatures from "@/components/features/BestFeatures"

export default function company() {
  return (
    <>
      <Head>
        <title>Entitag | Company Profile</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="description"
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik dan friendly UX"
        />
        <meta
          name="google-site-verification"
          content="A0-IQ0YBZAtsyWwdy3FEcpW35Yan2aIkwE4Oj8w_Id4"
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="website, jasa, konsultasi, jasa pembuatan website, web application, landing page, company profile, mobile app, UX Friendly"
        />
        <meta
          name="author"
          content="Abdullah Alam"
        />
        <meta
          property="og:title"
          content="Entitag Technology"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:description"
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik dan friendly UX"
        />
        <meta
          property="og:url"
          content="https://entitagtech.com/"
        />
        <meta
          property="og:locale"
          content="id_ID"
        />
      </Head>
      <section className="pt-8 dark:text-white md:my-24 md:pt-0">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row`}>
          <div className="p-3 md:p-0">
            <h2 className="mb-5 text-4xl font-extrabold text-blue-900">
              {workTexts[0].title}
            </h2>
            <p className="max-w-xl leading-7 text-slate-600">
              {workTexts[0].text}
            </p>
          </div>
          <span className="animate-float">{workTexts[0].svgEle}</span>
        </div>
        <FeaturesPricing type={COMPANYPROFILE} />
        <BestFeatures type={COMPANYPROFILEFEATURE} />
        <Process />
      </section>
    </>
  )
}
