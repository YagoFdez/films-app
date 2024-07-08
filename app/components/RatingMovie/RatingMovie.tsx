import { useFilmStore } from '@/app/store/movieStore';
import { useState } from 'react';

export const RatingMovie = () => {
  const [rating, setRating] = useState(0);
  const { selectedMovie, rateMovie } = useFilmStore();

  const handleRate = () => {
    if (selectedMovie) {
      rateMovie(selectedMovie.id, rating);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="number"
        min="0"
        max="10"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="mr-2 p-2 border rounded"
      />
      <button
        onClick={handleRate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Rate
      </button>
    </div>
  );
};