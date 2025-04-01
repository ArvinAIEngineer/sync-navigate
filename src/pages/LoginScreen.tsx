
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    otp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to SyncNavigate",
      });
      navigate("/");
    }, 1500);
  };

  const handleOTPLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP verification process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to SyncNavigate",
      });
      navigate("/");
    }, 1500);
  };

  const handleSendOTP = () => {
    if (!formData.phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to ${formData.phoneNumber}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Sync<span className="text-brand-orange">Navigate</span>
          </h1>
          <p className="text-gray-500 mt-2">Field Staff App</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="password" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="otp">OTP</TabsTrigger>
            </TabsList>
            
            <TabsContent value="password">
              <form onSubmit={handlePasswordLogin}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="text-xs text-primary hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="mr-2">Signing in</span>
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="otp">
              <form onSubmit={handleOTPLogin}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleSendOTP}
                      >
                        Send OTP
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otp">Verification Code</Label>
                    <Input
                      id="otp"
                      name="otp"
                      type="text"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="mr-2">Verifying</span>
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      "Verify & Sign In"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;
