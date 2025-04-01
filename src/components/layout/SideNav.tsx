
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Bell,
  FileText,
  DollarSign,
  Users,
  Search,
  MessageSquare,
  Clock,
  MapPin,
  BarChart2,
  Book,
  User,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
  badge?: number;
}

const NavItem = ({ to, icon: Icon, children, badge }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-md ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    <Icon className="h-5 w-5" />
    <span>{children}</span>
    {badge ? <span className="notification-badge ml-auto">{badge}</span> : null}
  </NavLink>
);

const SideNav = () => {
  return (
    <div className="flex h-full flex-col border-r bg-white">
      <div className="p-4">
        <h2 className="font-bold text-primary text-xl">BharatOne</h2>
        <p className="text-sm text-muted-foreground">Field Staff App</p>
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-4">
          <div className="space-y-1">
            <NavItem to="/" icon={Home}>Dashboard</NavItem>
            <NavItem to="/notifications" icon={Bell} badge={3}>Notifications</NavItem>
            <NavItem to="/forms" icon={FileText}>Forms & Checklists</NavItem>
            <NavItem to="/incentives" icon={DollarSign}>Incentives</NavItem>
            <NavItem to="/customer-connect" icon={Users}>Customer Connect</NavItem>
            <NavItem to="/search" icon={Search}>Search</NavItem>
            <NavItem to="/communicator" icon={MessageSquare}>Communicator</NavItem>
            <NavItem to="/workflows" icon={Clock}>Workflows</NavItem>
            <NavItem to="/geolocation" icon={MapPin}>GeoLocation</NavItem>
            <NavItem to="/dashboards" icon={BarChart2}>Dashboards</NavItem>
            <NavItem to="/e-knowledge" icon={Book}>E-Knowledge</NavItem>
            <NavItem to="/my-info" icon={User}>My Info</NavItem>
          </div>
          
          <Separator />
          
          <div className="space-y-1">
            <NavItem to="/settings" icon={Settings}>Settings</NavItem>
            <NavItem to="/login" icon={LogOut}>Logout</NavItem>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default SideNav;
