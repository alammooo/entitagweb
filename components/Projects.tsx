import { projects } from "@/data/projects"
import { Carousel, Spinner } from "flowbite-react"
import Image from "next/image"
import React from "react"

export default function Projects() {
  return (
    <section className="bg-blue-500 bg-divider bg-cover text-white bg-blend-color-burn">
      <div className="h-full w-full py-5 backdrop-brightness-75 md:py-14 ">
        <h2 className="pt-5 text-center text-3xl font-medium">Our Projects</h2>
        <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-white to-transparent "></div>
        <div className="h-[920px] xl:h-[600px] px-2 md:px-0">
          <Carousel slideInterval={5000}>
            {projects.map((el, i) => (
              <div
                className="container mx-auto flex md:max-w-6xl flex-col gap-2 md:gap-0 md:items-center justify-between md:flex-row"
                key={i}>
                <div>
                  <a
                    href={el.imgUrl}
                    target="_blank"
                    className="mb-2 block text-2xl font-bold md:mb-10 md:text-5xl">
                    {el.title}
                  </a>
                  <p className="max-w-lg leading-7">{el.desc}</p>
                </div>
                <div className="md:w-2/5">
                  <Image
                    src={el.image}
                    alt="TravelPack"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
