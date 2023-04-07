import { companyProfileFeature, onlineStoreFeature } from "@/data/fiturAndalan"
import SectionHead from "../SectionHead"
import Image from "next/image"
import FetureImage from "./featureimg.svg"
import { CiSignpostR1 } from "react-icons/ci"
import {
  COMPANYPROFILEFEATURE,
  ONLINESHOPFEATURES,
} from "@/interfaces/interfaces"

export default function BestFeatures({ type }: any) {
  return (
    <div className="mt-14 bg-lime-50 bg-opacity-50 py-10">
      <SectionHead type={type} />
      <div className="mx-auto mt-7 grid max-w-7xl items-center gap-x-14 md:grid-cols-2">
        <div>
          <Image
            src={FetureImage}
            alt={type}
            className="w-full"
          />
        </div>
        <div className="mx-auto grid gap-y-7 px-7 pt-7 md:px-0">
          {type === COMPANYPROFILEFEATURE &&
            companyProfileFeature.map((el, i) => (
              <div key={i}>
                <h2 className="mb-2 flex items-center gap-2 text-lg font-medium md:mb-0">
                  <CiSignpostR1 />
                  {el.name}
                </h2>
                <p className="text-zinc-600">{el.text}</p>
              </div>
            ))}
          {type === ONLINESHOPFEATURES &&
            onlineStoreFeature.map((el, i) => (
              <div key={i}>
                <h2 className="mb-2 flex items-center gap-2 text-lg font-medium md:mb-0">
                  <CiSignpostR1 />
                  {el.name}
                </h2>
                <p className="text-zinc-600">{el.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
