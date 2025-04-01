
import React from "react";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  {
    id: 1,
    title: "New Target Assigned",
    description: "Your monthly targets have been updated. Check the dashboards section.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Form Deadline Approaching",
    description: "The monthly evaluation form needs to be submitted within 24 hours.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    title: "Team Performance Update",
    description: "Your team has achieved 85% of the monthly target. Keep up the good work!",
    time: "Yesterday",
    read: false,
  },
  {
    id: 4,
    title: "New Training Material Available",
    description: "New training videos are available in E-Knowledge section.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    title: "Incentive Payment Processed",
    description: "Your incentive for last month has been processed and will be credited in 2-3 business days.",
    time: "1 week ago",
    read: true,
  },
];

const NotificationsPage = () => {
  return (
    <div className="page-container">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="page-title mb-0">Notifications</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-150px)]">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`${notification.read ? 'bg-white' : 'bg-blue-50 border-blue-100'}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${notification.read ? 'bg-gray-100' : 'bg-blue-100'}`}>
                    <Bell className={`h-4 w-4 ${notification.read ? 'text-gray-500' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium ${notification.read ? '' : 'text-primary'}`}>
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default NotificationsPage;
