import { links } from "@/data/navLinks";

export default function Navbar({ show }: any) {
  return (
    <nav
      className={`${
        show ? "h-fit py-4" : "-translate-y-20 h-0"
      } fixed top-0 mx-auto w-full bg-white shadow-lg z-50 transition-all ease-linear duration-400`}
    >
      <div className="container mx-auto flex max-w-6xl justify-between">
        <h1 className="text-xl font-black uppercase tracking-wider">Entitag</h1>
        <ul className="flex gap-6 text-sm font-semibold text-zinc-600">
          <li className="cursor-pointer text-blue-500">Home</li>
          {links.map((link) => (
            <li className="cursor-pointer hover:text-blue-500" key={link}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
