import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';

const mockMovieInfo = {
  id: 1,
  title: 'Sample Title',
  release_date: '2024-07-09',
  overview: 'Sample Overview',
  poster_path: '/sample.jpg',
};

const mockOnClose = jest.fn();

describe('MovieDetails component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<MovieDetails movieInfo={mockMovieInfo} onClose={mockOnClose} />);
  });

  it('renders all the movie info', () => {
    const headingFilm = screen.getByRole('heading', { level: 2 });
    expect(headingFilm).toBeInTheDocument();
    expect(headingFilm).toHaveTextContent(mockMovieInfo.title);

    const releaseDate = screen.getByText(mockMovieInfo.release_date);
    expect(releaseDate).toBeInTheDocument();

    const overviewFilm = screen.getByText(mockMovieInfo.overview);
    expect(overviewFilm).toBeInTheDocument();

    const posterFilm = screen.getByAltText(`Poster of ${mockMovieInfo.title}`);
    expect(posterFilm).toBeInTheDocument();
  });

  it('close button is handled with onClose', () => {
    const closeButton = screen.getByRole('closebutton');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders the component with the correct movie title', () => {
    expect(screen.getByText(`Sample Title`)).toBeInTheDocument();
  });
});
