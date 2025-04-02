
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, BarChart2, FileText, DollarSign } from "lucide-react";

const navigation = [
  { name: "Home", to: "/", icon: Home },
  { name: "Search", to: "/search", icon: Search },
  { name: "Incentives", to: "/incentives", icon: DollarSign },
  { name: "Forms", to: "/forms", icon: FileText },
  { name: "Reports", to: "/workflows", icon: BarChart2 },
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
              `nav-item ${isActive ? "text-brand-bfil-red" : "text-gray-500"}`
            }
          >
            {({ isActive }) => (
              <>
                <div 
                  className={`nav-icon-container ${
                    isActive ? "bg-brand-bfil-red" : "bg-gray-200"
                  }`}
                >
                  <item.icon 
                    className={`nav-icon ${
                      isActive ? "text-white" : "text-gray-500"
                    }`} 
                  />
                </div>
                <span className="text-xs mt-1">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;
