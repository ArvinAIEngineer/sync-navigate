
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Send, Image, Paperclip, User, Bot, Info, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// Dummy data for chat messages
const chatMessages = [
  {
    id: 1,
    sender: "bot",
    message: "Hello! How can I assist you today?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "user",
    message: "I need information about the new loan product",
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    sender: "bot",
    message: "We've recently launched our new 'Business Growth Loan' with an interest rate starting at 10.5% p.a. and loan amounts ranging from ₹50,000 to ₹5,00,000. Would you like more details?",
    timestamp: "10:31 AM",
  },
  {
    id: 4,
    sender: "user",
    message: "Yes, what are the eligibility criteria?",
    timestamp: "10:32 AM",
  },
  {
    id: 5,
    sender: "bot",
    message: "For the Business Growth Loan, the eligibility criteria are:\n\n1. Business age: Minimum 1 year\n2. Applicant age: 21-65 years\n3. Valid business registration/license\n4. Basic KYC documents\n5. 6 months bank statements\n\nDo you meet these criteria?",
    timestamp: "10:33 AM",
  },
  {
    id: 6,
    sender: "user",
    message: "Yes, I meet all the criteria. What's the application process?",
    timestamp: "10:34 AM",
  },
  {
    id: 7,
    sender: "bot",
    message: "Great! The application process is simple:\n\n1. Fill the loan application form (available online or at branches)\n2. Submit required documents\n3. Our team will verify documents and conduct a business assessment\n4. Loan approval typically within 3-5 working days\n5. Disbursement directly to your bank account\n\nWould you like to start an application now?",
    timestamp: "10:35 AM",
  },
];

// Dummy data for broadcasts
const broadcasts = [
  {
    id: 1,
    title: "New Incentive Structure",
    message: "Dear team, we're pleased to announce the new incentive structure for Q3. This includes higher bonuses for customer acquisition and improved rates for loan disbursements. Check the Incentives section for details.",
    sender: "Rajiv Mehta, Head of Sales",
    time: "Yesterday, 2:30 PM",
    read: true,
  },
  {
    id: 2,
    title: "System Maintenance Notice",
    message: "The mobile app will be under maintenance on Sunday, 15th September, from 2 AM to 5 AM. During this time, the app services will be temporarily unavailable. We apologize for any inconvenience.",
    sender: "IT Department",
    time: "Sep 10, 11:45 AM",
    read: true,
  },
  {
    id: 3,
    title: "COVID-19 Safety Guidelines Update",
    message: "In light of recent developments, we're updating our safety protocols. All field staff must continue wearing masks during customer visits and maintain social distancing. Hand sanitizers will be distributed at all centers next week.",
    sender: "HR Department",
    time: "Sep 8, 9:15 AM",
    read: false,
  },
  {
    id: 4,
    title: "New Product Launch: Micro Enterprise Loan",
    message: "We're excited to announce the launch of our new Micro Enterprise Loan product targeting small business owners. Training sessions will be conducted at all regional offices starting next Monday. Please ensure your attendance.",
    sender: "Product Team",
    time: "Sep 5, 3:20 PM",
    read: false,
  },
];

// Dummy data for team members
const teamMembers = [
  {
    id: 1,
    name: "Rajiv Mehta",
    position: "Regional Manager",
    status: "online",
    lastActive: "Now",
    avatar: "RM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Team Lead",
    status: "online",
    lastActive: "Now",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Field Officer",
    status: "away",
    lastActive: "15m ago",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Neha Gupta",
    position: "Field Officer",
    status: "offline",
    lastActive: "1h ago",
    avatar: "NG",
  },
  {
    id: 5,
    name: "Vijay Singh",
    position: "Field Officer",
    status: "offline",
    lastActive: "3h ago",
    avatar: "VS",
  },
];

const CommunicatorPage = () => {
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("chatbot");
  const [selectedBroadcast, setSelectedBroadcast] = useState<any>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      // This would handle sending the message in a real application
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  const renderChatbotTab = () => (
    <div className="flex flex-col h-[calc(100vh-250px)]">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="bg-brand-bfil-red/10 rounded-full p-2 mr-2">
                  <Bot className="h-5 w-5 text-brand-bfil-red" />
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.sender === "user"
                    ? "bg-brand-bfil-red text-white"
                    : "bg-gray-100"
                }`}
              >
                <p className="whitespace-pre-line text-sm">{msg.message}</p>
                <p
                  className={`text-xs mt-1 text-right ${
                    msg.sender === "user" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
              {msg.sender === "user" && (
                <div className="bg-brand-bfil-red/10 rounded-full p-2 ml-2">
                  <User className="h-5 w-5 text-brand-bfil-red" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="shrink-0">
            <Image className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button 
            className="shrink-0 bg-brand-bfil-red hover:bg-brand-bfil-red/90"
            onClick={handleSendMessage}
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );

  const renderBroadcastsList = () => (
    <ScrollArea className="h-[calc(100vh-250px)]">
      <div className="space-y-3 p-2">
        {broadcasts.map((broadcast) => (
          <Card 
            key={broadcast.id} 
            className={`cursor-pointer hover:border-brand-bfil-red transition-colors ${
              !broadcast.read ? 'bg-blue-50 border-blue-100' : ''
            }`}
            onClick={() => setSelectedBroadcast(broadcast)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${broadcast.read ? 'bg-gray-100' : 'bg-blue-100'}`}>
                  <MessageSquare className={`h-4 w-4 ${broadcast.read ? 'text-gray-500' : 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${broadcast.read ? '' : 'text-primary'}`}>
                    {broadcast.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {broadcast.message}
                  </p>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>{broadcast.sender}</span>
                    <span>{broadcast.time}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );

  const renderBroadcastDetail = () => (
    <Card className="h-[calc(100vh-250px)]">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{selectedBroadcast.title}</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSelectedBroadcast(null)}
            className="h-8 w-8 p-0"
          >
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <div>From: {selectedBroadcast.sender}</div>
          <div>{selectedBroadcast.time}</div>
        </div>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-400px)]">
          <div className="text-sm whitespace-pre-line">
            {selectedBroadcast.message}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );

  const renderTeamChat = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-250px)] gap-4">
      <Card className="lg:col-span-1 overflow-hidden">
        <CardHeader className="p-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Users className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <ScrollArea className="h-[calc(100vh-325px)]">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-0"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-bfil-red/10 flex items-center justify-center text-brand-bfil-red font-medium">
                  {member.avatar}
                </div>
                <span 
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    member.status === 'online' ? 'bg-green-500' : 
                    member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{member.name}</p>
                <p className="text-xs text-gray-500 truncate">{member.position}</p>
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {member.lastActive}
              </div>
            </div>
          ))}
        </ScrollArea>
      </Card>

      <Card className="lg:col-span-2 flex flex-col">
        <CardHeader className="p-3 border-b">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-brand-bfil-red/10 flex items-center justify-center text-brand-bfil-red font-medium">
                RM
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white bg-green-500" />
            </div>
            <div>
              <CardTitle className="text-sm font-medium">Rajiv Mehta</CardTitle>
              <p className="text-xs text-gray-500">Regional Manager • Online</p>
            </div>
          </div>
        </CardHeader>

        <div className="flex flex-col flex-1">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                  Today
                </span>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-brand-bfil-red/10 rounded-full p-2 mr-2 self-end">
                  <User className="h-5 w-5 text-brand-bfil-red" />
                </div>
                <div className="max-w-[70%] bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">Good morning! I wanted to check in about the target status for North region.</p>
                  <p className="text-xs mt-1 text-right text-gray-500">9:30 AM</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="max-w-[70%] bg-brand-bfil-red text-white rounded-lg p-3">
                  <p className="text-sm">Hi Rajiv, we're currently at 78% of our monthly target. The team has been performing well this week.</p>
                  <p className="text-xs mt-1 text-right text-white/70">9:32 AM</p>
                </div>
                <div className="bg-brand-bfil-red/10 rounded-full p-2 ml-2 self-end">
                  <User className="h-5 w-5 text-brand-bfil-red" />
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-brand-bfil-red/10 rounded-full p-2 mr-2 self-end">
                  <User className="h-5 w-5 text-brand-bfil-red" />
                </div>
                <div className="max-w-[70%] bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">That's great progress! Do you think we'll hit 100% by month-end?</p>
                  <p className="text-xs mt-1 text-right text-gray-500">9:35 AM</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="max-w-[70%] bg-brand-bfil-red text-white rounded-lg p-3">
                  <p className="text-sm">Yes, we have several high-value leads in the pipeline. I've scheduled a team meeting today to review our strategy for the remaining days.</p>
                  <p className="text-xs mt-1 text-right text-white/70">9:38 AM</p>
                </div>
                <div className="bg-brand-bfil-red/10 rounded-full p-2 ml-2 self-end">
                  <User className="h-5 w-5 text-brand-bfil-red" />
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-brand-bfil-red/10 rounded-full p-2 mr-2 self-end">
                  <User className="h-5 w-5 text-brand-bfil-red" />
                </div>
                <div className="max-w-[70%] bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">Perfect! Send me the meeting notes afterward. Let me know if you need any additional resources.</p>
                  <p className="text-xs mt-1 text-right text-gray-500">9:40 AM</p>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <Image className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                className="shrink-0 bg-brand-bfil-red hover:bg-brand-bfil-red/90"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="page-container">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="page-title mb-0">Communicator</h1>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="chatbot">
            <Bot className="h-4 w-4 mr-2" />
            Chatbot
          </TabsTrigger>
          <TabsTrigger value="broadcasts">
            <MessageSquare className="h-4 w-4 mr-2" />
            Broadcasts
          </TabsTrigger>
          <TabsTrigger value="team">
            <Users className="h-4 w-4 mr-2" />
            Team Chat
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="chatbot" className="mt-0">
          {renderChatbotTab()}
        </TabsContent>
        
        <TabsContent value="broadcasts" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {selectedBroadcast ? renderBroadcastDetail() : renderBroadcastsList()}
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="mt-0">
          {renderTeamChat()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunicatorPage;
