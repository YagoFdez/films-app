'use client'

import { Movie } from "@/app/types";
import Image from "next/image";
import { RatingMovie } from "../RatingMovie/RatingMovie";

type Props = {
    movieInfo: Movie;
    onClose: () => void;
}

export const MovieDetail = ({movieInfo, onClose} : Props) => {
   return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white shadow-2xl rounded-lg max-w-md w-full p-6 border-2 border-black">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                                        width={450}
                                        height={150}
                                        alt={`Poster of ${movieInfo.title}`}
                                    />
                    <h2 className="text-xl font-semibold mb-2">{movieInfo.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">{movieInfo.release_date}</p>
                    <p className="text-gray-800 text-sm">{movieInfo.overview}</p>
                </div>
                <RatingMovie/>
            </div>
   );
}