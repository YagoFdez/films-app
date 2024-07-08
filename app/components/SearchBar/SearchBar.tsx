'use client'

import { useState } from "react"

export const SearchBar = () =>  {

    const [query, setQuery] = useState('')

    return (
        <div>
        <input
            type="text"
            value={query}
            placeholder="Buscar pelicula..."
            className="w-full p-2 border rounded-lg"
            />
            </div>
    );
}