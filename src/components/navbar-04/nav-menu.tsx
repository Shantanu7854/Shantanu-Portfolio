import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {[
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ].map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              className="transition-all duration-300 text-red-300 
                hover:text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 
                bg-clip-text hover:bg-clip-text hover:text-transparent"
            >
              {item.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
