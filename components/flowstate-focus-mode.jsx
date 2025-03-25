"use client";

import React, { useState, useEffect } from 'react';
import { Pause, Play, X, SkipForward, Volume2, Volume1, AlertCircle, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';

const FocusMode = () => {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [distractions, setDistractions] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Progress percentage
  const progressPercentage = 100 - ((timeRemaining / totalTime) * 100);

  useEffect(() => {
    // Timer countdown
    let timer;
    if (!isPaused && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [isPaused, timeRemaining]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const logDistraction = () => {
    setDistractions(prev => prev + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} transition-colors duration-300`}>
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-slate-800 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <div 
            className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer"
            onClick={() => router.push('/dashboard')}
          >
            <Play className="h-4 w-4 text-white" />
          </div>
          <span 
            className="font-semibold text-lg cursor-pointer"
            onClick={() => router.push('/dashboard')}
          >
            FlowState
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Focus Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {/* Background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-950 opacity-10 z-0"></div>
        
        {/* Task Info */}
        <div className="text-center mb-6 z-10">
          <h1 className="text-2xl font-semibold mb-2">Complete project proposal</h1>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">Work</Badge>
            <Badge variant="secondary">Important</Badge>
          </div>
        </div>
        
        {/* Timer Circle */}
        <div className="relative mb-8 z-10">
          <div className="h-64 w-64 rounded-full border-8 border-slate-700 flex items-center justify-center relative">
            {/* Progress ring */}
            <svg className="absolute inset-0 h-full w-full rotate-[-90deg]" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="46" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8"
                strokeDasharray="289.02652413026095"
                strokeDashoffset={289.02652413026095 * (1 - progressPercentage / 100)}
                className="text-blue-500"
              />
            </svg>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{formatTime(timeRemaining)}</div>
              <div className="text-sm text-slate-400">of {formatTime(totalTime)}</div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-4 mb-8 z-10">
          <Button variant="outline" size="lg" onClick={togglePause} className="h-12 w-12 rounded-full p-0">
          {isPaused ? 
  <Play className="h-5 w-5 text-black" /> : 
  <Pause className="h-5 w-5 text-black" />
}
          </Button>
          
        </div>
        
        {/* Inspirational Quote */}
        <div className="text-center max-w-md mb-12 z-10">
          <p className="italic text-slate-400">"Deep work is the ability to focus without distraction on a cognitively demanding task."</p>
          <p className="text-sm mt-2 text-slate-500">— Cal Newport</p>
        </div>
        
        {/* Stats Card */}
        <Card className={`max-w-md w-full p-4 z-10 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-slate-500">Session</p>
              <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>1 of 3</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500">Distractions</p>
              <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{distractions}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500">Focus Score</p>
              <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>97%</p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-slate-500">Current Mood</p>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Focused</p>
            </div>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>
          
          <div className="mt-4 flex justify-between">
            <div className="flex items-center gap-2">
              <Volume1 className="h-4 w-4 text-slate-500" />
              <p className="text-sm text-slate-500">Ambient Sound</p>
            </div>
            <Button variant="ghost" size="sm">
              <Volume2 className={isDarkMode ? "h-4 w-4 text-white" : "h-4 w-4 text-black"} />
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default FocusMode;