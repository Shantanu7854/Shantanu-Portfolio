import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar04Page = () => {
  return (
    <nav
      className="fixed top-6 inset-x-4 h-16 
      bg-gradient-to-r from-black/70 via-neutral-900/80 to-black/70
      border border-red-600/40 
      shadow-[0_0_25px_rgba(220,38,38,0.6)] 
      backdrop-blur-xl 
      max-w-screen-xl mx-auto rounded-full 
      animate-[fadeInDown_0.8s_ease] z-50"
    >
      <div className="h-full flex items-center justify-between px-6">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex justify-center flex-1">
          <NavMenu
            className="text-red-300 tracking-wide 
            transition-colors duration-300 hover:text-red-400"
          />
        </div>

        {/* Right: Mobile Menu */}
        <div className="md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
