"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { search: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const handleClear = () => {
    setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center">
        <Input
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && <X onClick={handleClear} />}
        <Button>
          <SearchIcon />
        </Button>
      </form>
    </>
  );
}
