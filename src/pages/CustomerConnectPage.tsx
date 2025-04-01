
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Phone, Mail, Search, User, Filter, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Dummy data for customers
const customers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    phone: "9876543210",
    email: "rajesh.kumar@example.com",
    location: "Delhi",
    lastContact: "2 days ago",
    status: "active",
    category: "Premium",
    leadScore: 85,
  },
  {
    id: 2,
    name: "Priya Sharma",
    phone: "8765432109",
    email: "priya.sharma@example.com",
    location: "Mumbai",
    lastContact: "1 week ago",
    status: "pending",
    category: "Standard",
    leadScore: 67,
  },
  {
    id: 3,
    name: "Amit Patel",
    phone: "7654321098",
    email: "amit.patel@example.com",
    location: "Ahmedabad",
    lastContact: "3 days ago",
    status: "inactive",
    category: "Premium",
    leadScore: 92,
  },
  {
    id: 4,
    name: "Sunita Singh",
    phone: "6543210987",
    email: "sunita.singh@example.com",
    location: "Kolkata",
    lastContact: "Yesterday",
    status: "active",
    category: "Standard",
    leadScore: 78,
  },
  {
    id: 5,
    name: "Vikram Reddy",
    phone: "5432109876",
    email: "vikram.reddy@example.com",
    location: "Hyderabad",
    lastContact: "4 days ago",
    status: "pending",
    category: "Premium",
    leadScore: 81,
  },
  {
    id: 6,
    name: "Neha Gupta",
    phone: "4321098765",
    email: "neha.gupta@example.com",
    location: "Chennai",
    lastContact: "6 days ago",
    status: "active",
    category: "Standard",
    leadScore: 73,
  },
];

// Chart data for customer categories
const categoryData = [
  { name: "Premium", value: 42 },
  { name: "Standard", value: 58 },
];

// Chart data for customer engagement
const engagementData = [
  { month: "Jan", meetings: 45, calls: 67, emails: 89 },
  { month: "Feb", meetings: 52, calls: 73, emails: 78 },
  { month: "Mar", meetings: 61, calls: 82, emails: 91 },
  { month: "Apr", meetings: 58, calls: 69, emails: 85 },
  { month: "May", meetings: 63, calls: 75, emails: 88 },
  { month: "Jun", meetings: 72, calls: 89, emails: 96 },
];

// Colors for pie chart
const COLORS = ["#8B2131", "#58595B"];

const CustomerConnectPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="page-title mb-0">Customer Connect</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Customer Search</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm" className="bg-brand-bfil-red text-white hover:bg-brand-bfil-red/90">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Customer
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by name, phone or email..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ScrollArea className="h-[380px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map((customer) => (
                      <TableRow key={customer.id} onClick={() => setSelectedCustomer(customer)} className="cursor-pointer">
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="bg-brand-bfil-red/10 rounded-full p-1">
                              <User className="h-4 w-4 text-brand-bfil-red" />
                            </div>
                            <span className="font-medium">{customer.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="flex items-center space-x-1">
                              <Phone className="h-3 w-3 text-gray-500" />
                              <span>{customer.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <Mail className="h-3 w-3 text-gray-500" />
                              <span>{customer.email}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{customer.location}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              customer.status === "active"
                                ? "bg-green-100 text-green-800"
                                : customer.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer 
                config={{
                  meetings: { label: "Meetings", color: "#8B2131" },
                  calls: { label: "Calls", color: "#58595B" },
                  emails: { label: "Emails", color: "#D1D3D4" },
                }}
                className="h-[300px]"
              >
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="meetings" fill="#8B2131" />
                  <Bar dataKey="calls" fill="#58595B" />
                  <Bar dataKey="emails" fill="#D1D3D4" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          {selectedCustomer ? (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Customer Details</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedCustomer(null)}
                    className="h-8 w-8 p-0"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="bg-brand-bfil-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <User className="h-8 w-8 text-brand-bfil-red" />
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{selectedCustomer.name}</h3>
                  <p className="text-sm text-gray-500">{selectedCustomer.category} Customer</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Phone</span>
                    <span className="font-medium">{selectedCustomer.phone}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium">{selectedCustomer.email}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Location</span>
                    <span className="font-medium">{selectedCustomer.location}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Last Contact</span>
                    <span className="font-medium">{selectedCustomer.lastContact}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Lead Score</span>
                    <span className="font-medium">{selectedCustomer.leadScore}/100</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-brand-bfil-red hover:bg-brand-bfil-red/90">Call Customer</Button>
                  <Button variant="outline" className="w-full">Send Email</Button>
                  <Button variant="outline" className="w-full">Schedule Meeting</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Customer Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="bg-brand-bfil-red/10 inline-flex rounded-full p-4">
                    <Users className="h-8 w-8 text-brand-bfil-red" />
                  </div>
                  <h3 className="text-2xl font-bold mt-2">{customers.length}</h3>
                  <p className="text-gray-500">Total Customers</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gray-50 rounded-md p-3">
                    <h4 className="text-xl font-semibold text-brand-bfil-red">
                      {customers.filter(c => c.status === 'active').length}
                    </h4>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded-md p-3">
                    <h4 className="text-xl font-semibold text-brand-bfil-gray">
                      {customers.filter(c => c.status === 'pending').length}
                    </h4>
                    <p className="text-xs text-gray-500">Pending</p>
                  </div>
                </div>

                <div className="h-[180px] mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-center text-sm mb-4">
                  <p>Customer distribution by category</p>
                </div>

                <Button className="w-full bg-brand-bfil-red hover:bg-brand-bfil-red/90">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add New Customer
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerConnectPage;
