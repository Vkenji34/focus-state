"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <CardTitle>Welcome to FlowState</CardTitle>
          <CardDescription>
            Log in to continue your productivity journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Email" type="email" />
          </div>
          <div className="space-y-2">
            <Input placeholder="Password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            className="w-full"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Log In
          </Button>
          <div className="text-center text-sm">
            <a href="/signup" className="text-blue-500 hover:text-blue-700">
              Don't have an account? Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
