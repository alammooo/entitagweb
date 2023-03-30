import { image } from "@/data/images"
import SectionHead from "./SectionHead"
import Image from "next/image"

export default function Tech() {
  return (
    <section className="bg-zinc-50 py-20">
      <SectionHead type="tech" />
      <div className="mx-auto mt-24 grid max-w-fit grid-cols-2 gap-16 md:grid-cols-5">
        {image.map((el, i) => (
          <div
            className="mx-auto h-20 w-fit rounded-md"
            key={i}>  
            <Image
              src={el}
              alt={`${i}`}
              width={100}
              className="object-cover contrast-125 duration-200 h-fit"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
