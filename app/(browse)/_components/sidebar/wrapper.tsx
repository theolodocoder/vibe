"use client";

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 bg-slate-800 flex flex-col w-60 h-full border-r border-slate-900 z-50",
        isCollapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
}
