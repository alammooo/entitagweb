import { image } from "@/data/images"
import SectionHead from "./SectionHead"

export default function Tech() {
  return (
    <section className="py-20 bg-zinc-50">
      <SectionHead type="tech" />
      <div className="mx-auto mt-24 grid max-w-fit grid-cols-4 gap-16">
        {image.map((el, i) => (
          <div className="mx-auto h-20 w-fit rounded-md" key={i}>
            <img
              src={el}
              alt=""
              className="h-full w-full object-cover contrast-125 "
            />
          </div>
        ))}
      </div>
    </section>
  )
}
