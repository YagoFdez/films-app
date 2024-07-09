import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { RatingMovie } from '../components/RatingMovie/RatingMovie';
import { useFilmStore } from '../store/movieStore';

jest.mock('../store/movieStore', () => ({
  useFilmStore: jest.fn(),
}));

type UseFilmStoreType = {
  selectedMovie: { id: number; title: string } | null;
  rateMovie: (id: number, rating: number) => void;
};

describe('RatingMovie component', () => {
  let mockRateMovie: jest.Mock;

  beforeEach(() => {
    mockRateMovie = jest.fn();
    (useFilmStore as jest.MockedFunction<any>).mockReturnValue({
      selectedMovie: { id: 1, title: 'Title 1' },
      rateMovie: mockRateMovie,
    } as UseFilmStoreType);
    render(<RatingMovie />);
  });

  it('call rateMovie with the value when the button is clicked', () => {
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '7' } });

    const button = screen.getByRole('button', { name: /rate/i });
    fireEvent.click(button);

    expect(mockRateMovie).toHaveBeenCalledWith(1, 7);
  });
});
