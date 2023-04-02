import { BsWhatsapp } from "react-icons/bs"

export default function Whatsapp() {
  return (
    <div className="fixed bottom-3 right-3 z-50 text-white">
      <a
        title="Konsultasi via WhatsApp"
        target="_blank"
        href="https://wa.me/6285156579033?text=Saya%20tertarik%20untuk%20membuat%20website"
        className="flex max-w-fit items-center justify-end gap-2 rounded-lg bg-emerald-400 px-2 py-1.5">
        <BsWhatsapp className="h-5 w-5" />
        <span>Konsultasi Gratis</span>
      </a>
    </div>
  )
}
