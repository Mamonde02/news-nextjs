"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/?q=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search news..."
                className="border p-2 rounded-l w-3/4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                Search
            </button>
        </form>
    );
}
