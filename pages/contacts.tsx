import { useForm } from "@formspree/react"
import React from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { HiBuildingOffice2 } from "react-icons/hi2"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import Head from "next/head"

export default function Contact() {
  const [state, handleSubmit] = useForm("xeqwlolv")
  const formRef = React.useRef<HTMLFormElement>(null)

  if (state.succeeded) {
    toast("📧 Success send message!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    formRef.current?.reset()
  }

  return (
    <>
      <Head>
        <title>Entitag | Kontak Kami</title>

        <link
          rel="icon"
          href="/favicon.ico"
 type="image/x-icon"
        />
        <meta
          name="description"
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik dan friendly UX"
        />
        <meta
          name="google-site-verification"
          content="A0-IQ0YBZAtsyWwdy3FEcpW35Yan2aIkwE4Oj8w_Id4"
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="website, jasa, konsultasi, jasa pembuatan website, web application, landing page, company profile, mobile app, UX Friendly"
        />
        <meta
          name="author"
          content="Abdullah Alam"
        />
        <meta
          property="og:title"
          content="Entitag Technology"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:description"
          content="Entitag, jasa pembuatan website dan aplikasi web untuk bisnis anda dengan performa terbaik dan friendly UX"
        />
        <meta
          property="og:url"
          content="https://entitagtech.com/"
        />
        <meta
          property="og:locale"
          content="id_ID"
        />
      </Head>
      <section className="mx-auto flex max-w-7xl flex-col gap-4 py-32">
        <h2 className="text-center text-4xl font-bold">Kontak Kami</h2>
        <p className="mx-auto max-w-2xl text-center text-xl font-light text-zinc-600">
          Kami berusaha mempersiapkan yang terbaik dan memberikan pelayanan
          maximal untuk anda
        </p>
        <div className="md:grid md:grid-cols-3 md:gap-20">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="col-span-2 mb-7 flex flex-col px-6 md:mb-0 md:px-0">
            <div className="mb-6">
              <label
                htmlFor="nama"
                className="mb-2 block text-sm font-medium text-gray-900">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="name"
                className="block w-full rounded border border-slate-400 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder=""
                required
              />
            </div>
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="telephone"
                  className="mb-2 block text-sm font-medium text-gray-900">
                  Nomor Telefon
                </label>
                <input
                  type="number"
                  id="telephone"
                  name="telephone"
                  className="block w-full rounded border border-slate-400 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+62829xxxxx"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded border border-slate-400 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="email@perusahaan.com"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="company"
                name="subject"
                className="block w-full rounded border border-slate-400 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder=""
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-900 md:text-base">
                Your message
              </label>
              <textarea
                id="message"
                rows={7}
                name="message"
                className="block w-full rounded border border-slate-400 p-3 text-sm text-gray-900 placeholder:font-light focus:border-blue-500 focus:ring-blue-500 md:text-base"
                placeholder="Leave a message..."></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="self-end rounded bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white duration-200 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit md:text-base">
              {state.submitting ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
          <div className="flex flex-col items-center gap-10 px-7 md:px-0">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="max-w-fit rounded-md bg-zinc-100 p-4">
                <MdEmail className="h-10 w-10 fill-blue-600" />
              </div>
              <h2 className="text-xl font-bold">Email</h2>
              <span>
                <p>company@entitagtech.com</p>
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="max-w-fit rounded-md bg-zinc-100 p-4">
                <IoCall className="h-10 w-10 fill-blue-600" />
              </div>
              <h2 className="text-xl font-bold">Nomor Telefon</h2>
              <span>
                <p>
                  Whatsapp :{" "}
                  <a
                    title="Konsultasi via WhatsApp"
                    target="_blank"
                    href="https://wa.me/6285156579033?text=Saya%20tertarik%20untuk%20membuat%20website"
                    className="text-blue-600">
                    +62 851-5657-9033
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
