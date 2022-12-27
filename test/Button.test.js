import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

test('renders agregar text', () => {
  render(<Button />);
  const linkElement = screen.getByText(/agregar/i);
  expect(linkElement).toBeInTheDocument()
});
test('renders pagar text', () => {
  render(<Button txt='Pagar' />);
  const linkElement = screen.getByText(/pagar/i);
  expect(linkElement).toBeInTheDocument()
});