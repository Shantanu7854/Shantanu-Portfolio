import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-red-500/40 
          bg-black/40 text-red-400 hover:bg-red-500 hover:text-white 
          transition-all duration-300"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 sm:w-80 bg-gradient-to-b from-black via-neutral-900 to-black 
        border-r border-red-500/40 text-red-300"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center py-6 border-b border-red-500/30">
            <Logo />
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <NavMenu
              orientation="vertical"
              className="space-y-6 text-lg font-medium"
            />
          </div>

  
        </div>
      </SheetContent>
    </Sheet>
  );
};
