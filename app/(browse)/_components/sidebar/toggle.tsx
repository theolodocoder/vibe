"use client";
import { useSidebar } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
export default function Toggle() {
  const { isCollapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = isCollapsed ? "Expand" : "Collapse";
  return (
    <>
      {isCollapsed && (
        <div className="hidden lg:flex w-full items-center justify-center">
          <Button onClick={onExpand} size={"sm"} variant={"ghost"}>
            <ArrowRightFromLine className="w-4 h-4" />
          </Button>
        </div>
      )}
      {!isCollapsed && (
        <div className="flex">
          <p>For you</p>
          <Button onClick={onCollapse} size={"sm"} variant={"ghost"}>
            <ArrowLeftFromLine className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}
