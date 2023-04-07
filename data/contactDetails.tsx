import { BsTelephone, BsCalendarWeek } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"

export const contactDetails = [
  {
    name: "Phone and Chat",
    firstText: "Whatsapp : +62 851-5657-9033",
    secondText: "",
    icon: <BsTelephone className="h-6 w-6" />,
  },
  {
    name: "Contact",
    firstText: "Company : entitagweb@mail.com",
    secondText: "",
    icon: <MdAlternateEmail className="h-6 w-6" />,
  },
  {
    name: "Working Hours",
    firstText: "Senin-Jumat: 8:00 - 21:00",
    secondText: "Sabtu-Minggu: 08:00 - 18:00",
    icon: <BsCalendarWeek className="h-6 w-6" />,
  },
]
