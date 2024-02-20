"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Container({ children }: { children: React.ReactNode }) {
  const { isCollapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const isMobile = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    if (isMobile) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [isMobile, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex", isCollapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
}
