import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../page';

jest.mock('../components/MovieList/MoviesList', () => ({
  MoviesList: () => <div data-testid="movies-list">Mocked MoviesList</div>,
}));

describe('Home component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('correct page title', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Films');
  });

  it('renders the MoviesList component', () => {
    const moviesList = screen.getByTestId('movies-list');
    expect(moviesList).toBeInTheDocument();
  });
});
