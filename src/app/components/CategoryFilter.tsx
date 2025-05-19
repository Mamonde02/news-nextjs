"use client";

import { useRouter } from "next/navigation";

const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
];

export default function CategoryFilter() {
    const router = useRouter();

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // Clear the search input when a category is selected
        const value = e.target.value;
        router.push(`/?category=${value}`);
    };

    return (
        <select onChange={handleSelect} className="mb-6 p-2 border rounded">
            <option value="">Select Category</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
        </select>
    );
}
