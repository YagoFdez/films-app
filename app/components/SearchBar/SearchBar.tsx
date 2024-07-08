'use client'

import { useFilmStore } from "@/app/store/movieStore"
import { useQueryClient } from '@tanstack/react-query'

export const SearchBar = () => {
    
  const queryClient = useQueryClient();
  const { searchQuery, setSearchQuery } = useFilmStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    queryClient.invalidateQueries({ queryKey: ['movies'] });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar pelicula..."
          className="w-full p-2 border rounded-lg"
        />
      </form>
    </div>
  );
}