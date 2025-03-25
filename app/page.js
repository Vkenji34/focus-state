"use client";

import React from "react";
import { CheckCircle, ArrowRight, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { ContainerScroll } from "@/components/container-scroll";

export default function Home() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-lg">FlowState</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateTo("/login")}
            >
              Log in
            </Button>
            <Button size="sm" onClick={() => navigateTo("/signup")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero with ContainerScroll */}
      <ContainerScroll
        titleComponent={
          <div className="mt-24 md:mt-0 space-y-6 text-center">
            <Badge
              variant="outline"
              className="py-1.5 px-4 border-blue-500 text-blue-500"
            >
              ✨ Your Focus Journey Begins Here
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
              Focus Deeply, <br /> Achieve Effortlessly
            </h1>
            <p className="text-base md:text-xl mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
              FlowState helps you enter your ideal productivity zone with
              distraction-free focus sessions.
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
          <img
            src="/home.png"
            alt="FlowState App Dashboard"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>
      </ContainerScroll>

      <div className="container mx-auto text-center -mt-32 md:-mt-40 mb-20 relative z-10">
        <Button
          size="lg"
          onClick={() => navigateTo("/dashboard")}
          className="rounded-full px-8 py-6 text-lg shadow-xl bg-primary transition-all duration-300"
        >
          Start Focusing <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About FlowState
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Discover a new way to achieve deep, meaningful productivity
              without the stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What is FlowState?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                FlowState is a distraction-free productivity platform designed
                to help you reach your optimal focus zone—often called "flow
                state"—where you're fully immersed in your work and performing
                at your peak.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Unlike traditional task managers that focus on checking boxes,
                FlowState emphasizes the quality of your focus time and helps
                you understand your personal productivity patterns.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Using techniques backed by cognitive science and productivity
                research, FlowState guides you toward deeper work sessions,
                fewer distractions, and a more fulfilling relationship with your
                tasks.
              </p>

              {/* Image for mobile view */}
              <div className="mt-8 md:hidden">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img src="/land.png" alt="timer" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30"></div>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Mindful Focus Sessions
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Dedicated time blocks with distraction tracking help you
                    train your focus muscle and gradually improve your
                    concentration abilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    2
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Mood-Aware Productivity
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Track your emotional state before and after work sessions to
                    identify your optimal conditions for entering flow state.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">
                    3
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Insightful Analytics
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Visual representations of your focus patterns help you
                    understand when and how you work best, enabling smarter
                    planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image for desktop view */}
              <div className="hidden md:block mb-8">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/land.png"
                    alt="Person in deep focus"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to achieve deep work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Focus Sessions</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Customizable timers based on Pomodoro technique or deep work
                preferences.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Organize your tasks with tags, priorities, and sessions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Visualize your productivity patterns with beautiful charts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 FlowState. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
