"use client";
import { useSidebar } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hints } from "@/components/hints";
export default function Toggle() {
  const { isCollapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = isCollapsed ? "Expand" : "Collapse";
  return (
    <>
      {isCollapsed && (
        <div className="hidden lg:flex w-full items-center justify-center">
          <Hints label={label} side="right" asChild>
            <Button onClick={onExpand} size={"sm"} variant={"ghost"}>
              <ArrowRightFromLine className="w-4 h-4" />
            </Button>
          </Hints>
        </div>
      )}
      {!isCollapsed && (
        <div className="flex w-full justify-between items-center">
          <p>For you</p>
          <Hints label={label} side="right" asChild>
            <Button onClick={onCollapse} size={"sm"} variant={"ghost"}>
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hints>
        </div>
      )}
    </>
  );
}
