import { cards } from "@/data/cards"

export default function HeroCards() {
  return (
    <section className="absolute -bottom-10 w-full ">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 text-zinc-400">
        {cards.map((e) => (
          <div className="flex gap-2 rounded bg-white p-5 shadow-md" key={e.id}>
            <div className="aspect-square h-10 w-10 bg-blue-200 p-2">
              {e.icons}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-black">{e.title}</h1>
              <p className="text-sm tracking-wide">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
