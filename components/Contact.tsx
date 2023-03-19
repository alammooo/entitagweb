import SectionHead from "./SectionHead"

export default function Contact() {
  return (
    <section
      className="mx-auto max-w-screen-md bg-white py-8 px-4 lg:py-20"
      id="Contact">
      <SectionHead type="contact" />
      <form action="#" className="space-y-8 mt-7">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-gray-900">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block w-full rounded border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900">
            Your message
          </label>
          <textarea
            id="message"
            className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Leave a comment..."></textarea>
        </div>
        <button
          type="submit"
          className="rounded bg-blue-700 py-3 px-5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit">
          Send message
        </button>
      </form>
    </section>
  )
}
