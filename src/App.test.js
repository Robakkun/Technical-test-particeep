import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app content', () => {
  render(<App />);

  const header = screen.getAllByTestId('header');
  expect(header).toBeDefined();

  const moviesList = screen.getAllByTestId('movies-list');
  expect(moviesList).toBeDefined();
});
