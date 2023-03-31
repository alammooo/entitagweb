import { cards } from "@/data/cards"

export default function HeroCards() {
  return (
    <section className="absolute -bottom-1/3 md:-bottom-10 w-full px-5 md:px-0">
      <div className="mx-auto grid max-w-6xl md:grid-cols-3 gap-6 text-zinc-400">
        {cards.map((e) => (
          <div className="flex gap-3 rounded bg-white p-5 shadow-md items-center" key={e.id}>
            <div className="flex flex-col justify-center items-center h-12 w-12 bg-blue-100 aspect-square p-2 text-blue-600">
              {e.icons}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-black">{e.title}</h1>
              <p className="md:text-base text-sm tracking-wide">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
