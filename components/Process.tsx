import { process } from "@/data/process"
import SectionHead from "./SectionHead"

export default function Process() {
  return (
    <section className="py-20">
      <SectionHead type="process" />
      <div className="mx-auto mt-12 grid max-w-6xl md:grid-cols-4 gap-7">
        {process.map((el, i) => (
          <div className="flex flex-col items-center gap-7">
            <div className="flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-full bg-blue-500 p-9">
              <h1 className="text-2xl font-bold text-white">{el.id}</h1>
            </div>
            <div className="text-center bg-slate-100 bg-opacity-50 p-5">
              <h2 className="font-semibold text-lg">{el.name}</h2>
              <h3 className="text-sm text-zinc-500 mt-2 leading-6">{el.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
