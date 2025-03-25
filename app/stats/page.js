"use client";

import React from "react";
import {
  Clock,
  CheckCircle,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Award,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StatsPage() {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* Sidebar */}
      <div className="hidden md:block bg-white dark:bg-slate-900 h-full border-r border-slate-200 dark:border-slate-800 w-64 flex-shrink-0 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-lg">FlowState</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => (window.location.href = "/dashboard")}
              >
                <Clock className="h-5 w-5 mr-2" />
                <span>Focus</span>
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                className="w-full justify-start"
                onClick={() => (window.location.href = "/stats")}
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                <span>Stats</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="h-5 w-5 mr-2" />
                <span>Settings</span>
              </Button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" alt="User" />
            <AvatarFallback>KT</AvatarFallback>
          </Avatar>
          <span className="ml-2 text-sm">Kenji Thompson</span>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-lg">FlowState</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto md:pt-0 pt-16">
        {/* Header */}
        <header className="p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-1">Statistics & Insights</h1>
              <p className="text-slate-500 dark:text-slate-400">
                Track your productivity and focus trends
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg px-3 py-1 bg-white dark:bg-slate-900">
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm px-2">March 18 - 24, 2025</span>
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button size="sm" className="gap-1">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">
                    Weekly Focus
                  </p>
                  <p className="text-2xl font-bold">17h 05m</p>
                  <p className="text-xs text-green-500 mt-1">
                    ↑ 23% from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">
                    Sessions
                  </p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-green-500 mt-1">
                    ↑ 4 more than last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">
                    Avg Session
                  </p>
                  <p className="text-2xl font-bold">42m</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Same as last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">
                    Streak
                  </p>
                  <p className="text-2xl font-bold">5 days 🔥</p>
                  <p className="text-xs text-slate-500 mt-1">Record: 12 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Placeholder for charts (since recharts may have issues in the script) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Daily Focus Hours</CardTitle>
                  <CardDescription>
                    Your focused work time throughout the week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <p className="text-slate-500">
                      Focus hours chart will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>
                    Where you spent your focus time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <p className="text-slate-500">
                      Category pie chart will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your recent accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">
                        Consistency Champion
                      </h3>
                      <p className="text-xs text-slate-500">
                        Completed focus sessions for 5 days in a row
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Deep Worker</h3>
                      <p className="text-xs text-slate-500">
                        Completed a 50+ minute session with no distractions
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
