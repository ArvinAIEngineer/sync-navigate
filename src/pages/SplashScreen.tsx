
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#8B2131]">
      <div className="text-center">
        <div className="mb-4 relative">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/1e092a6d-a789-47c0-9285-9426903f8a2e.png" 
              alt="BharatOne Logo" 
              className="w-64 h-auto mx-auto"
            />
          </div>
          <div className="text-3xl font-bold text-white">
            BharatOne
          </div>
          <div className="text-white/90 text-sm mt-2">
            Prayaas se pragati
          </div>
          <div className="text-white/70 text-xs mt-1">
            A 100% subsidiary of IndusInd Bank Limited
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
