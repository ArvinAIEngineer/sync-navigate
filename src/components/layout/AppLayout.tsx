
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import Header from "./Header";

const AppLayout = () => {
  const location = useLocation();
  const isIncentivesPage = location.pathname === "/incentives";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 pb-16">
        {isIncentivesPage && (
          <div className="bg-[#8B2131] text-white text-center py-2 px-4 text-sm font-medium">
            You are viewing the Incentives section
          </div>
        )}
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;
