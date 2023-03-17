import { sectionInterface, sectionTitle } from "@/data/sectionTItle"
import BlueBorder from "./BlueBorder"
import React from "react"

export default function SectionHead({ type }: any) {
  const [data, setData] = React.useState<sectionInterface>()

  React.useEffect(() => {
    sectionTitle.forEach((e) => {
      if(e.type === type){
        console.log(type)
      }
    })
  }, [sectionTitle, type])
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 text-center text-sm text-slate-400">
      <h5>{sectionTitle[0].subTitle}</h5>
      <h2 className="text-3xl font-medium text-black">
        We do all Creative Services
      </h2>
      <BlueBorder />
      <p>
        We craft digital, graphic and dimensional thinking, to create category
        leading brand experiences that have meaning and add a value.
      </p>
    </div>
  )
}
