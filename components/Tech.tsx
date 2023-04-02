import { image } from "@/data/images"
import SectionHead from "./SectionHead"
import Image from "next/image"
import React from "react"
import { Tooltip } from "flowbite-react"

export default function Tech() {
  const [showTooltip, setShowTooltip] = React.useState(false)

  return (
    <section className="bg-zinc-50 py-20">
      <SectionHead type="tech" />
      <div className="mx-auto mt-24 grid max-w-fit grid-cols-2 gap-16 md:grid-cols-5">
        {image.map((el, i) => (
          <span
            className="relative"
            key={i}>
            <Tooltip
              content={el.name}
              style="light">
              <div className="mx-auto h-20 w-fit rounded-md">
                <Image
                  onMouseEnter={() => {
                    setShowTooltip(true)
                    console.log("not bluured")
                  }}
                  onMouseLeave={() => {
                    setShowTooltip(false)
                    console.log("blutted")
                  }}
                  src={el.img}
                  alt={`${i}`}
                  width={100}
                  className="h-fit object-cover contrast-125 duration-200"
                />
              </div>
            </Tooltip>
          </span>
        ))}
      </div>
    </section>
  )
}
