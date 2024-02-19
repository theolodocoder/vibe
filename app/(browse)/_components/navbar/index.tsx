import { Logo } from "@/app/(browse)/_components/navbar/Logo";
import Search from "./search";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[49] w-full h-20 bg-[#1D1F26] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
    </nav>
  );
}
