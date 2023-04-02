import { BsWhatsapp } from "react-icons/bs"

export default function Whatsapp() {
  return (
    <div className="fixed bottom-3 right-3 z-50 text-white">
      <a
        target="_blank"
        href="https://wa.me/6282122104908?text=I'm%20interested%20in%20your%20service"
        className="flex max-w-fit items-center justify-end gap-2 rounded-lg bg-emerald-400 px-2 py-1.5">
        <BsWhatsapp className="h-5 w-5" />
        <h1>Konsultasi Gratis</h1>
      </a>
    </div>
  )
}
