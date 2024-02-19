import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export default async function Actions() {
  const user = await currentUser();
  return (
    <div>
      {!user && (
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      )}
      {/* use the !! to turn the user obj to a boolean if its available */}
      {!!user && (
        <div className="flex gap-x-2 items-cente">
          <Button variant={"ghost"} asChild>
            <Link href={"/u/" + user.username}>
              <Clapperboard />
              <span>Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
}
