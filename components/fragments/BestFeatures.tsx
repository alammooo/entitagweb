import { companyProfileFeature } from "@/data/fiturAndalan"
import SectionHead from "../SectionHead"

export default function BestFeatures({ type }: any) {
  return (
    <div className="bg-zinc-50 py-7 my-7">
      <SectionHead type={type} />
      <div className="mx-auto grid max-w-6xl grid-cols-2 pt-7 gap-y-7 gap-x-14">
        {companyProfileFeature.map((el, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold">{el.name}</h2>
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
