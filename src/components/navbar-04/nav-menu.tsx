import Link from "next/link";

interface NavMenuProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const NavMenu = ({ className = "", orientation = "horizontal" }: NavMenuProps) => {
  const items = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <ul
      className={`${
        orientation === "vertical"
          ? "flex flex-col items-start space-y-6"
          : "flex flex-row items-center gap-6"
      } ${className}`}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="transition-all duration-300 text-red-300 
              hover:text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 
              bg-clip-text hover:bg-clip-text hover:text-transparent"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
