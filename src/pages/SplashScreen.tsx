
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      // Navigate to login screen after splash screen
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <div className="text-center">
        <div className="mb-4 relative">
          <div className="text-3xl font-bold text-white">
            Sync<span className="text-brand-orange">Navigate</span>
          </div>
          <div className="animate-pulse-light text-white/80 text-sm mt-2">
            Field Staff App
          </div>
        </div>
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
