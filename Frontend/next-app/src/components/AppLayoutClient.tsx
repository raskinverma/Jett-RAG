"use client";

import { useEffect, useState } from "react";

interface AppLayoutClientProps {
  children: React.ReactNode;
}

export default function AppLayoutClient({
  children,
}: AppLayoutClientProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div className={`app-layout ${ready ? "is-ready" : ""}`}>
      {children}
    </div>
  );
}
