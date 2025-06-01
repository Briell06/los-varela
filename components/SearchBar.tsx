"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const placeholders = ["Buscar", "Encuentre su producto"];
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onSubmit={() => {
          router.push(`?search=${query}`);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
