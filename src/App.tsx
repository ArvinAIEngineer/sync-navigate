
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import Dashboard from "./pages/Dashboard";
import NotificationsPage from "./pages/NotificationsPage";
import FormsPage from "./pages/FormsPage";
import IncentivesPage from "./pages/IncentivesPage";
import CustomerConnectPage from "./pages/CustomerConnectPage";
import SearchPage from "./pages/SearchPage";
import CommunicatorPage from "./pages/CommunicatorPage";
import WorkflowsPage from "./pages/WorkflowsPage";
import GeoLocationPage from "./pages/GeoLocationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/incentives" element={<IncentivesPage />} />
            <Route path="/customer-connect" element={<CustomerConnectPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/communicator" element={<CommunicatorPage />} />
            <Route path="/workflows" element={<WorkflowsPage />} />
            <Route path="/geolocation" element={<GeoLocationPage />} />
            {/* Add more routes for other sections as needed */}
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
