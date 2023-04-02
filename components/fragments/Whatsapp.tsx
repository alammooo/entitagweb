import { BsWhatsapp } from "react-icons/bs"

export default function Whatsapp() {
  return (
    <div className="fixed bottom-3 left-3 z-50 text-white">
      <a
        target="_blank"
        href="https://wa.me/6282122104908?text=I'm%20interested%20in%20your%20service"
        className="flex max-w-fit items-center justify-end gap-2 rounded bg-blue-600 px-3 py-2">
        <BsWhatsapp className="h-7 w-7" />
        <h1>Konsultasi Gratis</h1>
      </a>
    </div>
  )
}
