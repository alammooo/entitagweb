import { useForm } from "@formspree/react"
import ContactDetails from "./ContactDetails"
import React from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
    <section
      className="bg-white py-3"
      id="Contact">
      <h2 className="text-xl font-medium text-black text-center">Contact Us</h2>
      <ContactDetails />
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="mx-auto mt-2 flex max-w-2xl flex-col gap-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block md:text-base text-sm text-gray-900">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full rounded border border-gray-400 p-3 md:text-base text-sm text-gray-900 placeholder:font-light focus:border-blue-300 focus:ring-0"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex gap-7">
          <div className="w-full">
            <label
              htmlFor="email"
              className="mb-2 block md:text-base text-sm text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded border border-gray-400 p-3 md:text-base text-sm text-gray-900 placeholder:font-light focus:border-blue-300 focus:ring-0"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="telephone"
              className="mb-2 block md:text-base text-sm text-gray-900">
              Your number
            </label>
            <input
              type="number"
              id="telephone"
              name="telephone"
              className="block w-full rounded border border-gray-400 p-3 md:text-base text-sm text-gray-900 placeholder:font-light focus:border-blue-300 focus:ring-0"
              placeholder="Enter your number"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block md:text-base text-sm text-gray-900">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block w-full rounded border border-gray-400 p-3 md:text-base text-sm text-gray-900 placeholder:font-light focus:border-blue-300 focus:ring-0"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block md:text-base text-sm text-gray-900">
            Your message
          </label>
          <textarea
            id="message"
            rows={7}
            name="message"
            className="block w-full rounded border border-gray-400 p-3 md:text-base text-sm text-gray-900 placeholder:font-light focus:border-blue-300 focus:ring-0"
            placeholder="Leave a message..."></textarea>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="self-end rounded bg-blue-700 py-3 px-5 text-center md:text-base text-sm font-medium text-white duration-200 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit">
          {state.submitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </section>
  )
}
