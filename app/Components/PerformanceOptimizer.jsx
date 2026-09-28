"use client";
import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      requestIdleCallback(() => {
        // Yahan non-critical tasks ya third-party scripts load karwayein
        console.log("Idle callback executed - Main thread is free");
      });
    }
  }, []);

  return null;
}