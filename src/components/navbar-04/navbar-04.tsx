import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar04Page = () => {
  return (
    <nav
      className="fixed top-6 inset-x-4 h-16 
      bg-gradient-to-r from-black/70 via-neutral-900/80 to-black/70
      border border-rose-500/40 
      shadow-[0_0_25px_rgba(244,63,94,0.6)] 
      backdrop-blur-xl 
      max-w-screen-xl mx-auto rounded-full 
      animate-[fadeInDown_0.8s_ease]"
    >
      <div className="h-full flex items-center justify-between mx-auto px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <NavMenu
          className="hidden md:block text-rose-300 tracking-wide 
          transition-colors duration-300 hover:text-pink-400"
        />

        <div className="flex items-center gap-3">
          {/* Sign In Button */}
          <Button
            variant="outline"
            className="rounded-full border border-rose-400/40 text-rose-300 font-medium
                bg-white/5 backdrop-blur-sm hover:text-pink-300 hover:border-pink-400 
                transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(244,63,94,0.6)]"
          >
            Sign In
          </Button>

          {/* Get Started Button */}
          <Button
            className="rounded-full bg-gradient-to-r from-rose-600/90 to-pink-500/90 text-white 
              hover:from-rose-500 hover:to-pink-400 hover:scale-105 
              transition-all duration-300 
              shadow-[0_0_18px_rgba(244,63,94,0.8)]"
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
