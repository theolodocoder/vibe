"use client";
import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import UserItem from "./useritem";

interface RecommendedProps {
  data: User[];
}

export default function Recommended({ data }: RecommendedProps) {
  const { isCollapsed } = useSidebar((state) => state);
  const showLabel = !isCollapsed && data.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Reccommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
}
