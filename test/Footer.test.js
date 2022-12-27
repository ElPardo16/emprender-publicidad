import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('renders city and country text', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Puerto Asís - Colombia/i);
    expect(linkElement).toBeInTheDocument()
});
test('renders direction', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Calle 10 # 26-21/i);
    expect(linkElement).toBeInTheDocument()
});
test('renders image', () => {
    render(<Footer />);
    expect(screen.getByRole("img")).toBeInTheDocument()
});
test('image have src and alt', () => {
    render(<Footer />);
    expect(screen.getByAltText(/logo/i)).toHaveAttribute("src")
});