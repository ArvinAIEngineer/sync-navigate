
import React from "react";
import { Link } from "react-router-dom";
import { 
  Bell, FileText, DollarSign, Users, Search, 
  MessageSquare, Clock, MapPin, BarChart2, 
  Book, User, Info 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
  { name: "Notifications", icon: Bell, path: "/notifications", count: 3 },
  { name: "Forms", icon: FileText, path: "/forms" },
  { name: "Incentives", icon: DollarSign, path: "/incentives" },
  { name: "Customer Connect", icon: Users, path: "/customer-connect" },
  { name: "Search", icon: Search, path: "/search" },
  { name: "Communicator", icon: MessageSquare, path: "/communicator" },
  { name: "Workflows", icon: Clock, path: "/workflows" },
  { name: "GeoLocation", icon: MapPin, path: "/geolocation" },
  { name: "Dashboards", icon: BarChart2, path: "/dashboards" },
  { name: "E-Knowledge", icon: Book, path: "/e-knowledge" },
  { name: "My Info", icon: User, path: "/my-info" },
  { name: "Support", icon: Info, path: "/support" },
];

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Field Staff Dashboard</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Today's Target</h3>
              <p className="text-sm text-muted-foreground">September 12, 2023</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-brand-bfil-red">78%</span>
              <p className="text-xs text-muted-foreground">of daily goal</p>
            </div>
          </div>
          
          <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-brand-bfil-red h-full rounded-full" style={{ width: "78%" }}></div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Visits</p>
              <p className="font-semibold">12/15</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Forms</p>
              <p className="font-semibold">8/10</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Conversions</p>
              <p className="font-semibold">5/8</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        {modules.map((module) => (
          <Link to={module.path} key={module.name} className="module-card">
            <div className="module-icon-container bg-brand-bfil-red rounded-full p-3 flex items-center justify-center">
              <module.icon className="module-icon h-5 w-5 text-white" />
            </div>
            <span className="module-text text-xs font-medium text-center mt-2">{module.name}</span>
            {module.count && <span className="notification-badge">{module.count}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
