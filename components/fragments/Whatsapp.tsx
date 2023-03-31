import { BsWhatsapp } from "react-icons/bs"

export default function Whatsapp() {
  return (
    <a target="_blank" href="https://wa.me/6282122104908?text=I'm%20interested%20in%20your%20service" className="fixed bottom-3 right-16 md:right-5 flex items-center gap-3 rounded bg-blue-600 px-5 py-2 text-white z-50">
      <BsWhatsapp className="w-7 h-7"/>
      <h1>Contact Us</h1>
    </a>
  )
}
