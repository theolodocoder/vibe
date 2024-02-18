import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// remember we dont use default exports for components
export function Logo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white rounded-full p-1">
        <Image src={"/logo1.svg"} alt="vibe" width={"80"} height={"80"} />
      </div>
      <div className={cn("flex flex-col gap-1 items-center", font.className)}>
        <p className="text-xl font-bold">VIBE</p>
        <p className="text-sm text-muted-foreground">
          Live Entertainment at it&apos;s finest
        </p>
      </div>
    </div>
  );
}
