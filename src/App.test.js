import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';

test('renders learn react link', () => {
  render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
  );
  const linkElement = screen.getByText(/Write a word to start/i);
  expect(linkElement).toBeInTheDocument();
});
