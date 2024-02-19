import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p className="text-red-500">
        Hello Vibe on authenticated user can see this :)
        <UserButton afterSignOutUrl="/" />
      </p>
    </>
  );
}
