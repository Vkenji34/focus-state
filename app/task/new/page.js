"use client";

import React from "react";
import { X, Clock, Tag, Calendar, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewTaskPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Create New Task</CardTitle>
            <p className="text-sm text-slate-500">
              Add a task and organize your focus session
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Task Name */}
          <div className="space-y-2">
            <label htmlFor="task-name" className="text-sm font-medium">
              Task Name
            </label>
            <Input
              id="task-name"
              placeholder="What do you want to focus on?"
              className="w-full"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="task-description" className="text-sm font-medium">
              Description (Optional)
            </label>
            <Textarea
              id="task-description"
              placeholder="Add any details or notes about this task"
              className="resize-none h-20"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 pl-2 h-6"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Work
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 ml-1 rounded-full"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Tag className="h-3 w-3" /> Add Tag{" "}
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>

          {/* Focus Duration */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Focus Duration</label>
              <span className="text-sm font-medium">25 minutes</span>
            </div>

            <div className="flex gap-2">
              <Button variant={true ? "default" : "outline"} size="sm">
                25 min
              </Button>
              <Button variant={false ? "default" : "outline"} size="sm">
                50 min
              </Button>
              <Button variant={false ? "default" : "outline"} size="sm">
                90 min
              </Button>
              <Button variant="outline" size="sm">
                Custom
              </Button>
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-3 pt-2">
            <label className="text-sm font-medium">Additional Options</label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox id="priority" />
                <label htmlFor="priority" className="text-sm cursor-pointer">
                  Mark as high priority
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="reminder" />
                <label htmlFor="reminder" className="text-sm cursor-pointer">
                  Set a reminder
                </label>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Cancel
          </Button>
          <Button onClick={() => (window.location.href = "/dashboard")}>
            Create Task
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
