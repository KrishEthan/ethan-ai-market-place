"use client";

import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "./placeholder-vanish-input";
import { FormEvent, useState } from "react";

export function Input() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const placeholders = [
    "Get the top gainer report",
    "Get the top loser report",
    "Get the top traded report",
    "Get the top volume report",
    "Get the top value report",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(e);
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
