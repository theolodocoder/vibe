import Link from "next/link";
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
    <Link href={"/"}>
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1">
          <Image src={"/logo1.svg"} alt="vibe" width={32} height={32} />
        </div>
        <div className={cn(font.className)}>
          <p className="text-lg font-semibold">Vibe</p>
          <p className="text-xs text-muted-foreground">Just Vibe!</p>
        </div>
      </div>
    </Link>
  );
}
