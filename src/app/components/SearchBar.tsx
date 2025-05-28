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
        <div className="mb-4 p-4">
            <form onSubmit={handleSubmit} className="mb-4 pb-4 flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search news..."
                    className="border p-2 rounded-l w-3/4 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    Search
                </button>
            </form>
            <p className="text-sm text-gray-500">
                Search results for: <strong>{query}</strong>
            </p>
        </div>
    );
}
