import { contactDetails } from "@/data/contactDetails"

export default function ContactDetails() {
  return (
    <div className="mt-7 flex justify-center gap-16 text-center">
      {contactDetails.map((el, i) => (
        <div className="flex flex-col gap-3" key={i}>
          <div className="mx-auto flex w-fit items-center justify-center rounded-2xl border border-zinc-200 p-3 text-blue-500">
            {el.icon}
          </div>
          <h1 className="text-lg font-semibold">{el.name}</h1>
          <div className="text-sm font-light text-slate-400">
            <h5>{el.firstText}</h5>
            <h5>{el.secondText}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}
