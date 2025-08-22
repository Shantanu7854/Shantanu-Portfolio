import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar04Page = () => {
  return (
    <nav
      className="fixed top-6 inset-x-4 h-16 
      bg-gradient-to-r from-black/70 via-slate-900/70 to-black/70
      border border-cyan-400/30 
      shadow-[0_0_20px_rgba(14,165,233,0.6)] 
      backdrop-blur-xl 
      max-w-screen-xl mx-auto rounded-full 
      animate-[fadeInDown_0.8s_ease]"
    >
      <div className="h-full flex items-center justify-between mx-auto px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block text-cyan-200 tracking-wide 
          transition-colors duration-300 hover:text-sky-400" />

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full 
              border-cyan-400/50 text-cyan-300 
              hover:border-sky-400 hover:text-sky-200 
              transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(56,189,248,0.7)]"
          >
            Sign In
          </Button>
          <Button
            className="rounded-full bg-gradient-to-r from-cyan-500/90 to-sky-500/90 text-white 
              hover:from-cyan-400 hover:to-sky-400 hover:scale-105 
              transition-all duration-300 
              shadow-[0_0_15px_rgba(56,189,248,0.8)]"
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
