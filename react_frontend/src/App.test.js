import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders OneConnect header', () => {
  render(<App />);
  const heading = screen.getByText(/OneConnect/i);
  expect(heading).toBeInTheDocument();
});
