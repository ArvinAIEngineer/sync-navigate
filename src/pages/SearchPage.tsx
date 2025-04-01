
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Building, User, MapPin, FileText, Info, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dummy search results
const customerResults = [
  {
    id: 1,
    name: "Ajay Mehta",
    accountNumber: "BFIL00123456",
    location: "Delhi",
    phone: "9876543210",
    email: "ajay.mehta@example.com",
    loanAmount: "₹2,50,000",
    loanType: "Business Loan",
    status: "Active",
  },
  {
    id: 2,
    name: "Seema Verma",
    accountNumber: "BFIL00124567",
    location: "Mumbai",
    phone: "8765432109",
    email: "seema.verma@example.com",
    loanAmount: "₹1,75,000",
    loanType: "Personal Loan",
    status: "Active",
  },
  {
    id: 3,
    name: "Prakash Singh",
    accountNumber: "BFIL00134578",
    location: "Jaipur",
    phone: "7654321098",
    email: "prakash.singh@example.com",
    loanAmount: "₹3,25,000",
    loanType: "Business Loan",
    status: "Closed",
  },
];

const employeeResults = [
  {
    id: 1,
    name: "Vikram Malhotra",
    empId: "EMP1234",
    designation: "Field Executive",
    department: "Sales",
    location: "Delhi",
    phone: "9876543111",
    email: "vikram.m@bfil.co.in",
  },
  {
    id: 2,
    name: "Priya Sharma",
    empId: "EMP1278",
    designation: "Team Lead",
    department: "Sales",
    location: "Mumbai",
    phone: "9876543222",
    email: "priya.s@bfil.co.in",
  },
  {
    id: 3,
    name: "Ajith Kumar",
    empId: "EMP1345",
    designation: "Field Executive",
    department: "Operations",
    location: "Chennai",
    phone: "9876543333",
    email: "ajith.k@bfil.co.in",
  },
];

const centerResults = [
  {
    id: 1,
    name: "Delhi North Center",
    code: "DNC-001",
    address: "Block A, Rohini, Delhi - 110085",
    manager: "Rajiv Kumar",
    phone: "011-40512345",
    employees: 12,
    customers: 345,
  },
  {
    id: 2,
    name: "Mumbai Central Center",
    code: "MCC-005",
    address: "Plot 23, Andheri East, Mumbai - 400069",
    manager: "Aditya Sharma",
    phone: "022-28453678",
    employees: 18,
    customers: 429,
  },
  {
    id: 3,
    name: "Bangalore Tech Park Center",
    code: "BTP-008",
    address: "Whitefield Main Road, Bangalore - 560066",
    manager: "Divya Nair",
    phone: "080-42789123",
    employees: 15,
    customers: 392,
  },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("customer");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  let filteredResults: any[] = [];
  
  if (searchCategory === "customer") {
    filteredResults = customerResults.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm)
    );
  } else if (searchCategory === "employee") {
    filteredResults = employeeResults.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm)
    );
  } else if (searchCategory === "center") {
    filteredResults = centerResults.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const renderSearchResults = () => {
    if (searchTerm.length < 2) {
      return (
        <div className="text-center py-10 text-gray-500">
          <Search className="mx-auto h-12 w-12 text-gray-300 mb-3" />
          <p>Enter at least 2 characters to search</p>
        </div>
      );
    }

    if (filteredResults.length === 0) {
      return (
        <div className="text-center py-10 text-gray-500">
          <Info className="mx-auto h-12 w-12 text-gray-300 mb-3" />
          <p>No results found for "{searchTerm}"</p>
        </div>
      );
    }

    return (
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="space-y-3">
          {filteredResults.map((item) => (
            <Card key={item.id} className="cursor-pointer hover:border-brand-bfil-red transition-colors" onClick={() => setSelectedItem(item)}>
              <CardContent className="p-4">
                {searchCategory === "customer" && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-brand-bfil-red/10">
                      <User className="h-5 w-5 text-brand-bfil-red" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${item.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.accountNumber}</p>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{item.phone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <FileText className="h-3.5 w-3.5" />
                          <span>{item.loanType}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <span className="font-semibold">{item.loanAmount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {searchCategory === "employee" && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-brand-bfil-red/10">
                      <User className="h-5 w-5 text-brand-bfil-red" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-xs text-gray-500">{item.empId}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.designation}, {item.department}</p>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{item.phone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 col-span-2">
                          <Mail className="h-3.5 w-3.5" />
                          <span>{item.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {searchCategory === "center" && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-brand-bfil-red/10">
                      <Building className="h-5 w-5 text-brand-bfil-red" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-xs text-gray-500">{item.code}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.address}</p>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <User className="h-3.5 w-3.5" />
                          <span>Manager: {item.manager}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{item.phone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <span>{item.employees} Employees</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <span>{item.customers} Customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    );
  };

  const renderDetailView = () => {
    if (!selectedItem) return null;

    if (searchCategory === "customer") {
      return (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Customer Details</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedItem(null)}
                className="h-8 w-8 p-0"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center flex-col">
                <div className="bg-brand-bfil-red/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <User className="h-8 w-8 text-brand-bfil-red" />
                </div>
                <h3 className="font-bold text-lg mt-2">{selectedItem.name}</h3>
                <p className="text-sm text-gray-500">{selectedItem.accountNumber}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-500">Loan Type</p>
                  <p className="font-medium">{selectedItem.loanType}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">Loan Amount</p>
                  <p className="font-medium">{selectedItem.loanAmount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">Status</p>
                  <p className="font-medium">{selectedItem.status}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{selectedItem.location}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{selectedItem.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{selectedItem.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t flex gap-2">
                <Button className="flex-1 bg-brand-bfil-red hover:bg-brand-bfil-red/90">
                  Call Customer
                </Button>
                <Button variant="outline" className="flex-1">
                  View Documents
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
    
    if (searchCategory === "employee") {
      return (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Employee Details</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedItem(null)}
                className="h-8 w-8 p-0"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center flex-col">
                <div className="bg-brand-bfil-red/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <User className="h-8 w-8 text-brand-bfil-red" />
                </div>
                <h3 className="font-bold text-lg mt-2">{selectedItem.name}</h3>
                <p className="text-sm text-gray-500">{selectedItem.empId}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-500">Designation</p>
                  <p className="font-medium">{selectedItem.designation}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">Department</p>
                  <p className="font-medium">{selectedItem.department}</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{selectedItem.location}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{selectedItem.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{selectedItem.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t flex gap-2">
                <Button className="flex-1 bg-brand-bfil-red hover:bg-brand-bfil-red/90">
                  Call Employee
                </Button>
                <Button variant="outline" className="flex-1">
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
    
    if (searchCategory === "center") {
      return (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Center Details</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedItem(null)}
                className="h-8 w-8 p-0"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center flex-col">
                <div className="bg-brand-bfil-red/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Building className="h-8 w-8 text-brand-bfil-red" />
                </div>
                <h3 className="font-bold text-lg mt-2">{selectedItem.name}</h3>
                <p className="text-sm text-gray-500">{selectedItem.code}</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-500">Address</p>
                  <p className="font-medium">{selectedItem.address}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">Manager</p>
                  <p className="font-medium">{selectedItem.manager}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium">{selectedItem.phone}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <h4 className="font-medium mb-2">Center Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <p className="text-lg font-bold text-brand-bfil-red">{selectedItem.employees}</p>
                    <p className="text-xs text-gray-500">Employees</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <p className="text-lg font-bold text-brand-bfil-red">{selectedItem.customers}</p>
                    <p className="text-xs text-gray-500">Customers</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t flex gap-2">
                <Button className="flex-1 bg-brand-bfil-red hover:bg-brand-bfil-red/90">
                  <MapPin className="h-4 w-4 mr-2" />
                  View on Map
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
    
    return null;
  };

  return (
    <div className="page-container">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="page-title mb-0">Search</h1>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <Tabs 
            defaultValue="customer" 
            value={searchCategory}
            onValueChange={setSearchCategory}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="customer">Customer</TabsTrigger>
              <TabsTrigger value="employee">Employee</TabsTrigger>
              <TabsTrigger value="center">Center</TabsTrigger>
            </TabsList>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder={`Search ${searchCategory}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {renderSearchResults()}
        </div>
        <div className="lg:col-span-1">
          {renderDetailView()}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
