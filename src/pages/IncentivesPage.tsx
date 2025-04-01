
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Trophy, TrendingUp, Users, Calendar } from "lucide-react";

// Sample incentive data
const incentiveData = {
  currentMonth: {
    name: "May 2023",
    earned: 12500,
    target: 20000,
    progress: 62,
  },
  stats: [
    {
      title: "Monthly Target",
      value: "₹20,000",
      icon: TrendingUp,
      change: "+5% from last month",
      changeType: "positive",
    },
    {
      title: "Earned So Far",
      value: "₹12,500",
      icon: DollarSign,
      change: "62% of target",
      changeType: "neutral",
    },
    {
      title: "Team Rank",
      value: "#3",
      icon: Trophy,
      change: "Up 2 positions",
      changeType: "positive",
    },
    {
      title: "New Customers",
      value: "45",
      icon: Users,
      change: "18 more than last month",
      changeType: "positive",
    },
  ],
  history: [
    { month: "Jan 2023", earned: 18500, target: 18000, progress: 103 },
    { month: "Feb 2023", earned: 16200, target: 18000, progress: 90 },
    { month: "Mar 2023", earned: 19000, target: 19000, progress: 100 },
    { month: "Apr 2023", earned: 17800, target: 20000, progress: 89 },
  ],
  leaderboard: [
    { rank: 1, name: "Rahul Sharma", amount: 18950, region: "North" },
    { rank: 2, name: "Priya Patel", amount: 17800, region: "West" },
    { rank: 3, name: "Amit Kumar", amount: 12500, region: "East" },
    { rank: 4, name: "Deepa Singh", amount: 11200, region: "South" },
    { rank: 5, name: "Vikram Mehta", amount: 10500, region: "Central" },
  ],
};

const IncentivesPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Incentives Dashboard</h1>
      
      <div className="mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex justify-between">
              <span>Current Progress - {incentiveData.currentMonth.name}</span>
              <Badge variant="outline" className="ml-2 bg-[#8B2131]/10">
                <Calendar className="h-3 w-3 mr-1" /> 
                {incentiveData.currentMonth.name}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>₹{incentiveData.currentMonth.earned.toLocaleString()}</span>
                <span>₹{incentiveData.currentMonth.target.toLocaleString()}</span>
              </div>
              <Progress value={incentiveData.currentMonth.progress} className="h-2" />
              <div className="text-xs text-muted-foreground text-center">
                {incentiveData.currentMonth.progress}% of monthly target achieved
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {incentiveData.stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-[#8B2131]/10 p-2">
                  <stat.icon className="h-6 w-6 text-[#8B2131]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-semibold">{stat.value}</h3>
                  <p className={`text-xs ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Tabs defaultValue="history" className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">Performance History</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {incentiveData.history.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{month.month}</span>
                      <span className={`text-xs ${
                        month.progress >= 100 ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {month.progress}% of target
                      </span>
                    </div>
                    <Progress value={month.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹{month.earned.toLocaleString()} earned</span>
                      <span>Target: ₹{month.target.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">This Month's Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incentiveData.leaderboard.map((person, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      person.rank === 3 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                        person.rank === 1 ? 'bg-[#FFD700] text-black' :
                        person.rank === 2 ? 'bg-[#C0C0C0] text-black' :
                        person.rank === 3 ? 'bg-[#CD7F32] text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {person.rank}
                      </div>
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-xs text-muted-foreground">{person.region} Region</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{person.amount.toLocaleString()}</p>
                      <Badge variant="outline" className="text-xs">
                        {person.rank === 3 ? "You" : "Peer"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-[#8B2131] hover:bg-[#6d1a26]">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Complete Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Incentive Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Estimate your incentives based on your performance metrics
            </p>
            <Button className="w-full bg-[#8B2131] hover:bg-[#6d1a26]">
              Open Calculator
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Incentive Schemes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View all current and upcoming incentive schemes
            </p>
            <Button variant="outline" className="w-full text-[#8B2131] border-[#8B2131] hover:bg-[#8B2131]/10">
              View Schemes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IncentivesPage;
