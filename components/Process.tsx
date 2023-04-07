import { process } from "@/data/process"
import SectionHead from "./SectionHead"

export default function Process() {
  return (
    <section className="py-10">
      <SectionHead type="process" />
      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16"
            data-aos="fade-in">
            {process.map((el, i) => (
              <div key={i}>
                <div className="relative mx-auto flex items-center justify-center">
                  <svg
                    className="text-blue-500"
                    width="72"
                    height="75"
                    viewBox="0 0 72 75"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                  </svg>
                  <h1 className="absolute h-7 w-9 font-bold text-blue-50">
                    {el.id}
                  </h1>
                </div>
                <div className="rounded-xl bg-blue-50 bg-opacity-30 p-5">
                  <h3 className="text-lg font-semibold text-black">
                    {el.name}
                  </h3>
                  <p className="mt-4 text-base ">{el.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
