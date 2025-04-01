
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const forms = [
  {
    id: 1,
    title: "Daily Customer Visit Report",
    description: "Record customer interactions and feedback",
    deadline: "Today, 6:00 PM",
    status: "pending",
  },
  {
    id: 2,
    title: "Quality Assurance Checklist",
    description: "Ensure service quality standards are met",
    deadline: "Tomorrow, 12:00 PM",
    status: "pending",
  },
  {
    id: 3,
    title: "Monthly Performance Report",
    description: "Self-assessment of monthly performance",
    deadline: "Sep 30, 11:59 PM",
    status: "pending",
  },
  {
    id: 4,
    title: "Weekly Activity Log",
    description: "Summary of activities performed during the week",
    deadline: "Completed on Sep 10",
    status: "completed",
  },
  {
    id: 5,
    title: "Customer Satisfaction Survey",
    description: "Collect feedback from customers",
    deadline: "Completed on Sep 8",
    status: "completed",
  },
  {
    id: 6,
    title: "Expense Claim Form",
    description: "Submit travel and business expenses",
    deadline: "Missed on Sep 5",
    status: "missed",
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "pending":
      return <Clock className="h-5 w-5 text-amber-500" />;
    case "missed":
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

const FormsPage = () => {
  const pendingForms = forms.filter((form) => form.status === "pending");
  const completedForms = forms.filter((form) => form.status === "completed");
  const missedForms = forms.filter((form) => form.status === "missed");

  return (
    <div className="page-container">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="page-title mb-0">Forms & Checklists</h1>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pending ({pendingForms.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedForms.length})
          </TabsTrigger>
          <TabsTrigger value="missed">
            Missed ({missedForms.length})
          </TabsTrigger>
        </TabsList>

        {["pending", "completed", "missed"].map((tabValue) => (
          <TabsContent key={tabValue} value={tabValue}>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-3 mt-4">
                {forms
                  .filter((form) => form.status === tabValue)
                  .map((form) => (
                    <Card key={form.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-blue-50">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{form.title}</h3>
                              <StatusIcon status={form.status} />
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {form.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {form.deadline}
                            </p>
                          </div>
                        </div>
                        {form.status === "pending" && (
                          <Button className="w-full mt-3">
                            Fill Form
                          </Button>
                        )}
                        {form.status === "completed" && (
                          <Button variant="outline" className="w-full mt-3">
                            View Submission
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FormsPage;
