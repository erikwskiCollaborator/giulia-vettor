"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "uxxpr1v2pz";

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Clarity only in production and in browser
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);

  return null;
}
