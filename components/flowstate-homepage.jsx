"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, CheckCircle, BarChart2, Settings, Plus, Tag, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();

  const tasks = [
    {
      id: 1,
      title: 'Complete project proposal',
      tags: ['Work', 'Important'],
      duration: 50,
      completed: false,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Study JavaScript fundamentals',
      tags: ['Study', 'Coding'],
      duration: 25,
      completed: false,
      color: 'bg-purple-500',
    },
    {
      id: 3,
      title: 'Meditate',
      tags: ['Personal', 'Wellness'],
      duration: 15,
      completed: true,
      color: 'bg-green-500',
    },
    {
      id: 4,
      title: 'Weekly team meeting',
      tags: ['Work', 'Meeting'],
      duration: 50,
      completed: false,
      color: 'bg-amber-500',
    }
  ];

  const stats = {
    todayFocused: '1h 45m',
    streak: 5,
    tasksCompleted: 1,
    weekProgress: 68,
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* Sidebar */}
      <div className={`bg-white dark:bg-slate-900 h-full border-r border-slate-200 dark:border-slate-800 ${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Clock className="h-4 w-4 text-white" />
            </div>
            {!sidebarCollapsed && <span className="font-semibold text-lg">FlowState</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            <li>
 
<Link href="/" passHref>
  <Button variant="secondary" className={`w-full justify-${sidebarCollapsed ? 'center' : 'start'}`}>
    <Clock className="h-5 w-5 mr-2" />
    {!sidebarCollapsed && <span>Focus</span>}
  </Button>
</Link>
            </li>
          
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-${sidebarCollapsed ? 'center' : 'start'}`}
                onClick={() => navigateTo('/stats')}
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Stats</span>}
              </Button>
            </li>
            <li>
              <Button variant="ghost" className={`w-full justify-${sidebarCollapsed ? 'center' : 'start'}`}>
                <Settings className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Settings</span>}
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
          {!sidebarCollapsed && <span className="ml-2 text-sm">Kenji Thompson</span>}
        </div>

        {/* Collapse Button */}
        <div className="p-2 border-t border-slate-200 dark:border-slate-800 flex justify-center">
          <Button variant="ghost" size="sm" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            {sidebarCollapsed ? '→' : '←'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">Good morning, Kenji 👋</h1>
            <p className="text-slate-500 dark:text-slate-400">Ready to enter your flow state?</p>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">Today's Focus</p>
                  <p className="text-2xl font-bold">{stats.todayFocused}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">Streak</p>
                  <p className="text-2xl font-bold">{stats.streak} days 🔥</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">Completed</p>
                  <p className="text-2xl font-bold">{stats.tasksCompleted}/{tasks.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <p className="text-xs uppercase text-slate-500 font-medium">Week Goal</p>
                  <p className="text-2xl font-bold">{stats.weekProgress}%</p>
                  <Progress value={stats.weekProgress} className="mt-2 w-full" />
                </CardContent>
              </Card>
            </div>

            {/* Tabs and Tasks */}
            <div className="mb-8">
              <Tabs defaultValue="today" className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList>
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  <Button onClick={() => navigateTo('/task/new')}>
                    <Plus className="h-4 w-4 mr-2" /> Add Task
                  </Button>
                </div>

                <TabsContent value="today">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Today's Focus Sessions</CardTitle>
                      <CardDescription>Plan your deep work for maximum flow.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {tasks
                        .filter((task) => !task.completed)
                        .map((task) => (
                          <div
                            key={task.id}
                            className="p-4 border rounded-lg border-slate-200 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                          >
                            <div className="flex items-center">
                              <div className={`h-3 w-3 rounded-full ${task.color} mr-3`}></div>
                              <div>
                                <h3 className="font-medium">{task.title}</h3>
                                <div className="flex gap-2 mt-1">
                                  {task.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-sm text-slate-500">{task.duration} min</div>
                              <Button size="sm" className="gap-1" onClick={() => navigateTo('/focus')}>
                                <Play className="h-3 w-3" /> Start
                              </Button>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                    <CardFooter className="pt-0 justify-center border-t border-slate-200 dark:border-slate-800 p-4">
                      <Button variant="ghost" size="sm" onClick={() => navigateTo('/task/new')}>
                        <Plus className="h-4 w-4 mr-2" /> Add more tasks
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="upcoming">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Tasks</CardTitle>
                      <CardDescription>Plan ahead for tomorrow and beyond.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center py-8 text-slate-500">No upcoming tasks scheduled yet.</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="completed">
                  <Card>
                    <CardHeader>
                      <CardTitle>Completed Tasks</CardTitle>
                      <CardDescription>Great job on these completed items!</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {tasks
                        .filter((task) => task.completed)
                        .map((task) => (
                          <div
                            key={task.id}
                            className="p-4 border rounded-lg border-slate-200 dark:border-slate-800 flex items-center justify-between opacity-70"
                          >
                            <div className="flex items-center">
                              <div className={`h-3 w-3 rounded-full ${task.color} mr-3`}></div>
                              <div>
                                <h3 className="font-medium line-through">{task.title}</h3>
                                <div className="flex gap-2 mt-1">
                                  {task.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-sm text-slate-500">{task.duration} min</div>
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </div>
                          </div>
                        ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}