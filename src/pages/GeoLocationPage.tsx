
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, User, Navigation, Calendar, Clock, CheckCircle2, UserCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const locationData = [
  {
    id: 1,
    name: "Sharma Residence",
    address: "123 Gandhi Nagar, Pune, Maharashtra 411001",
    distance: "1.2 km",
    type: "Customer",
    status: "Scheduled Visit",
    time: "Today, 2:30 PM",
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    id: 2,
    name: "Patel Small Business",
    address: "45 MG Road, Pune, Maharashtra 411005",
    distance: "3.5 km",
    type: "Customer",
    status: "Follow-up",
    time: "Today, 4:00 PM",
    coordinates: { lat: 18.5314, lng: 73.8446 },
  },
  {
    id: 3,
    name: "Kumar Enterprises",
    address: "78 FC Road, Pune, Maharashtra 411004",
    distance: "2.1 km",
    type: "Lead",
    status: "New Visit",
    time: "Tomorrow, 11:00 AM",
    coordinates: { lat: 18.5236, lng: 73.8478 },
  },
  {
    id: 4,
    name: "Singh Textiles",
    address: "22 Laxmi Road, Pune, Maharashtra 411002",
    distance: "4.7 km",
    type: "Customer",
    status: "Collection",
    time: "Tomorrow, 1:30 PM",
    coordinates: { lat: 18.5176, lng: 73.8711 },
  },
  {
    id: 5,
    name: "Mehta Trading Co.",
    address: "56 Karve Road, Pune, Maharashtra 411004",
    distance: "2.9 km",
    type: "Lead",
    status: "New Visit",
    time: "Sep 16, 10:00 AM",
    coordinates: { lat: 18.5089, lng: 73.8259 },
  },
];

const completedVisits = [
  {
    id: 101,
    name: "Joshi Residence",
    address: "11 Koregaon Park, Pune, Maharashtra 411001",
    visitTime: "Today, 10:30 AM",
    status: "Completed",
    notes: "Customer signed for a new loan application",
  },
  {
    id: 102,
    name: "Desai Grocery",
    address: "34 Aundh, Pune, Maharashtra 411007",
    visitTime: "Today, 12:00 PM",
    status: "Completed",
    notes: "Collected EMI payment of ₹15,000",
  },
];

const GeoLocationPage = () => {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <div className="page-container">
      <h1 className="page-title">GeoLocation</h1>
      <p className="text-muted-foreground mb-6">Manage your field visits and customer locations</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-brand-bfil-red" />
              <span>Total Locations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Assigned to you</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-brand-bfil-red" />
              <span>Today's Visits</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
            <p className="text-sm text-muted-foreground">2 completed, 2 pending</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Navigation className="w-5 h-5 mr-2 text-brand-bfil-red" />
              <span>Travel Distance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12.5 km</p>
            <p className="text-sm text-muted-foreground">Estimated for today</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-4">
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="mt-0">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                <img 
                  src="/lovable-uploads/3e98d0f8-1d17-42e5-b0bf-fb0b90361ff4.png" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                  <MapPin className="h-16 w-16 mb-2" />
                  <p className="text-lg font-medium">Map View</p>
                  <p className="text-sm">Displaying 5 locations in your area</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="list" className="mt-0">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Upcoming Visits</h2>
            {locationData.map((location) => (
              <Card key={location.id} className="overflow-hidden">
                <div className={`h-1 ${
                  location.status === "New Visit" 
                    ? "bg-blue-500" 
                    : location.status === "Follow-up" 
                      ? "bg-amber-500" 
                      : location.status === "Collection"
                        ? "bg-brand-bfil-red"
                        : "bg-green-600"
                }`} />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{location.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      location.type === "Customer" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {location.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{location.address}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Navigation className="h-4 w-4 text-muted-foreground" />
                      <span>{location.distance} away</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{location.time}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{location.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <h2 className="text-xl font-semibold mb-2 mt-6">Completed Visits</h2>
            {completedVisits.map((visit) => (
              <Card key={visit.id} className="overflow-hidden">
                <div className="h-1 bg-green-600" />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{visit.name}</h3>
                    <div className="flex items-center text-green-600">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Completed</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{visit.address}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{visit.visitTime}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <UserCheck className="h-4 w-4 text-muted-foreground" />
                      <span>{visit.notes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GeoLocationPage;
