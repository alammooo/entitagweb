import { BsTelephone, BsCalendarWeek } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"

export const contactDetails = [
  {
    name: "Phone and Chat",
    firstText: "Phone : +62 821-2210-4908",
    secondText: "Whatsapp : +62 821-2210-4908",
    icon: <BsTelephone className="h-6 w-6" />,
  },
  {
    name: "Contact",
    firstText: "Company : entitagweb@mail.com",
    secondText: "Personal : abdullah.alam@outlook.de",
    icon: <MdAlternateEmail className="h-6 w-6" />,
  },
  {
    name: "Working Hours",
    firstText: "Monday-friday: 9:00 - 06:00",
    secondText: "Saturday-Sunday: Holiday",
    icon: <BsCalendarWeek className="h-6 w-6" />,
  },
]
