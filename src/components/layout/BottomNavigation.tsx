
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, BarChart2, FileText, User } from "lucide-react";

const navigation = [
  { name: "Home", to: "/", icon: Home },
  { name: "Search", to: "/search", icon: Search },
  { name: "Dashboards", to: "/dashboards", icon: BarChart2 },
  { name: "Forms", to: "/forms", icon: FileText },
  { name: "Profile", to: "/my-info", icon: User },
];

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full bg-white border-t border-gray-200">
      <nav className="flex">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex-1 py-2 flex flex-col items-center justify-center ${
                isActive ? "text-primary" : "text-gray-500"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;
