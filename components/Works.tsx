import { categories } from "@/data/portofolio"
import SectionHead from "./SectionHead"

export default function Works() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <section className="flex flex-col gap-10 py-20">
      <SectionHead type="porto" />
      <div className="flex justify-center gap-2">
        {categories.map((el) => (
          <button
            className={`rounded border px-5 py-2 text-center text-sm font-medium duration-200 hover:bg-blue-500 hover:text-white ${
              el === "All" ? "bg-blue-500 text-white" : "text-zinc-500"
            }`}>
            {el}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 px-3">
        {arr.map((el) => (
          <div className="object-cover">
            <img
              src="https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14819.jpg?w=1380&t=st=1679235182~exp=1679235782~hmac=61248efcb276ff888a84185a06d52cfb34182b281c04f5a9e6feb55618f4a2b9"
              alt=""
              className="h-full w-fit"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
