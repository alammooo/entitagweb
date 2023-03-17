import { sectionInterface, sectionTitle } from "@/data/sectionTItle"
import BlueBorder from "./BlueBorder"
import React from "react"

export default function SectionHead({ type }: any) {
  const [data, setData] = React.useState<sectionInterface>()

  React.useEffect(() => {
    setData(sectionTitle.find((el) => el.type === type))
  }, [sectionTitle, type])
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 text-center text-sm text-slate-400">
      <h5>{data?.subTitle}</h5>
      <h2 className="text-3xl font-medium text-black">{data?.title}</h2>
      <BlueBorder />
      <p>{data?.text}</p>
    </div>
  )
}
