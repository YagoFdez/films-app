import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MoviesList } from '../components/MovieList/MoviesList';
import { getPopularFilms } from '../lib/api';

jest.mock('../lib/api', () => ({
  getPopularFilms: jest.fn(),
}));

const mockMovies = [
  {
    id: 1,
    overview: 'Overview test 1',
    title: 'Title 1',
    release_date: '2023-01-01',
    poster_path: 'poster1.jpg',
  },
  {
    id: 2,
    overview: 'Overview test 2',
    title: 'Title 2',
    release_date: '2023-02-02',
    poster_path: 'poster2.jpg',
  },
];

describe('MoviesList component', () => {
  const queryClient: QueryClient = new QueryClient();
  beforeEach(() => {
    jest.clearAllMocks();
    (getPopularFilms as jest.Mock).mockResolvedValue({ results: mockMovies });
    render(
      <QueryClientProvider client={queryClient}>
        <MoviesList />
      </QueryClientProvider>
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders list of movies after loading', async () => {
    await waitFor(() => {
      expect(screen.getByText('Title 1')).toBeInTheDocument();
      expect(screen.getByText('Title 2')).toBeInTheDocument();
    });
  });
});
