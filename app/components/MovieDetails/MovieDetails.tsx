'use client';

import { Movie } from '@/app/types';
import Image from 'next/image';
import { RatingMovie } from '../RatingMovie/RatingMovie';

type Props = {
  movieInfo: Movie;
  onClose: () => void;
};

export const MovieDetails = ({ movieInfo, onClose }: Props) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white shadow-2xl rounded-lg max-w-2xl w-full p-6 m-4">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              role="closebutton"
              name='close'
              className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                width={300}
                height={450}
                alt={`Poster of ${movieInfo.title}`}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">{movieInfo.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{movieInfo.release_date}</p>
              <p className="text-gray-800 mb-4">{movieInfo.overview}</p>
              <RatingMovie />
            </div>
          </div>
        </div>
      </div>
    );
  };
