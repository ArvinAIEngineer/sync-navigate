
import React from "react";
import { Bell, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideNav from "./SideNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <SideNav />
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-primary text-lg">SyncNavigate</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/notifications" className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="notification-badge">3</span>
              <span className="sr-only">Notifications</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
