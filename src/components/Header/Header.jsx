const links = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Apps",
    href: "#",
  },
  {
    name: "Account",
    href: "#",
  },
  {
    name: "Export",
    href: "#",
  },
];
export default function Header() {
  const navLinks = links.map((link) => (
    <li className="cursor-pointer" key={link.name}>
      {link.name}
    </li>
  ));
  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-4 mt-2 border border-gray-200 px-4 rounded-md mx-auto">
        <div className="hidden md:block">
          <ul className="flex  gap-4 text-gray-500 font-medium">{navLinks}</ul>
        </div>
        <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
          Get App
        </div>
      </div>
    </nav>
  );
}
