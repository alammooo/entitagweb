import { categories } from "@/data/portofolio"
import { workTexts } from "@/data/workText"
import Image from "next/image"
import SectionHead from "./SectionHead"

export default function Works() {
  return (
    <section className="flex flex-col gap-10 py-20" id="Portofolio">
      <SectionHead type="porto" />
      {workTexts.map((el, i) => (
        <div
          key={i}
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 ${
            el.type === 2 ? "md:flex-row-reverse" : "md:flex-row "
          }`}>
          <div key={el.type}>
            <h1 className="mb-5 text-4xl font-extrabold text-blue-800">
              {el.title}
            </h1>
            <p className="max-w-xl leading-7 text-zinc-500">{el.text}</p>
          </div>
          {el.svgEle}
        </div>
      ))}
    </section>
  )
}
