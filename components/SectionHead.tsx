import { sectionInterface, sectionTitle } from "@/data/sectionTItle"
import React from "react"
import BlueBorder from "./fragments/BlueBorder"

export default function SectionHead({ type }: any) {
  const [data, setData] = React.useState<sectionInterface>()

  React.useEffect(() => {
    setData(sectionTitle.find((el) => el.type === type))
  }, [sectionTitle, type])
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 text-center text-sm text-slate-400">
      <h5 className="uppercase text-base">{data?.subTitle}</h5>
      <h2 className="text-3xl font-medium text-black">{data?.title}</h2>
      <BlueBorder />
      <p>{data?.text}</p>
    </div>
  )
}
