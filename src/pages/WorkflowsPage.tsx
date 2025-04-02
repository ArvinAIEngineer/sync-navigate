
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, CheckCircle2, AlertCircle, Users, FileText } from "lucide-react";

const workflowData = [
  {
    id: 1,
    title: "Customer Onboarding",
    dueDate: "Today, 5:00 PM",
    status: "In Progress",
    priority: "High",
    assigned: "You",
    steps: [
      { id: 1, task: "Verify KYC documents", completed: true },
      { id: 2, task: "Collect income proof", completed: true },
      { id: 3, task: "Complete loan application form", completed: false },
      { id: 4, task: "Schedule property verification", completed: false },
    ],
  },
  {
    id: 2,
    title: "Loan Disbursement",
    dueDate: "Tomorrow, 2:00 PM",
    status: "Pending",
    priority: "Medium",
    assigned: "You",
    steps: [
      { id: 1, task: "Verify account details", completed: false },
      { id: 2, task: "Confirm disbursement amount", completed: false },
      { id: 3, task: "Get manager approval", completed: false },
    ],
  },
  {
    id: 3,
    title: "Collection Follow-up",
    dueDate: "Sep 15, 10:00 AM",
    status: "Scheduled",
    priority: "Medium",
    assigned: "Team",
    steps: [
      { id: 1, task: "Call customer", completed: false },
      { id: 2, task: "Send payment reminder", completed: false },
      { id: 3, task: "Schedule visit if needed", completed: false },
    ],
  },
];

const WorkflowsPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Workflows</h1>
      <p className="text-muted-foreground mb-6">Track and manage your daily tasks and processes</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="w-5 h-5 mr-2 text-brand-bfil-red" />
              <span>Pending</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Tasks requiring action</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
              <span>Completed</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Tasks completed today</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-amber-500" />
              <span>Overdue</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Tasks past deadline</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mb-4">Active Workflows</h2>
      
      <div className="space-y-4">
        {workflowData.map((workflow) => (
          <Card key={workflow.id} className="overflow-hidden">
            <div className={`h-1 ${
              workflow.priority === "High" 
                ? "bg-brand-bfil-red" 
                : workflow.priority === "Medium" 
                  ? "bg-amber-500" 
                  : "bg-blue-500"
            }`} />
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{workflow.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{workflow.dueDate}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    workflow.status === "In Progress" 
                      ? "bg-blue-100 text-blue-800" 
                      : workflow.status === "Pending" 
                        ? "bg-amber-100 text-amber-800" 
                        : "bg-green-100 text-green-800"
                  }`}>
                    {workflow.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Users className="h-4 w-4" />
                <span>Assigned to: {workflow.assigned}</span>
              </div>

              <div className="space-y-2 border-t pt-2">
                {workflow.steps.map((step) => (
                  <div key={step.id} className="flex items-center gap-2">
                    <Checkbox id={`step-${workflow.id}-${step.id}`} checked={step.completed} />
                    <label 
                      htmlFor={`step-${workflow.id}-${step.id}`}
                      className={`text-sm ${step.completed ? "line-through text-muted-foreground" : ""}`}
                    >
                      {step.task}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkflowsPage;
