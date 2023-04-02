import { workTexts } from "@/data/workText"
import SectionHead from "./SectionHead"

export default function Works() {
  return (
    <section className="flex flex-col gap-10 pb-20" id="Portofolio">
      <SectionHead type="porto" />
      {workTexts.map((el, i) => (
        <div
          key={i}
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 ${
            el.type === 2 ? "md:flex-row-reverse" : "md:flex-row "
          }`}>
          <div key={el.type}>
            <h2 className="mb-5 text-4xl font-extrabold text-blue-900">
              {el.title}
            </h2>
            <p className="max-w-xl leading-7 text-slate-600">{el.text}</p>
          </div>
          <span className="animate-float">{el.svgEle}</span>
        </div>
      ))}
    </section>
  )
}
