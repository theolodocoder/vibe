"use client";

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

export default function UserItem({
  username,
  imageUrl,
  isLive,
}: UserItemProps) {
  const { isCollapsed } = useSidebar((state) => state);
  const pathname = usePathname();
  const href = `/${username}`;
  const isActive = pathname == href;
  return (
    <Button
      asChild
      variant={"ghost"}
      className={cn(
        "w-full h-12",
        isCollapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center gap-x-4 w-full",
            isCollapsed && "justify-center"
          )}
        >
          <UserAvatar username={username} imageUrl={imageUrl} isLive={isLive} />
        </div>
      </Link>
    </Button>
  );
}
