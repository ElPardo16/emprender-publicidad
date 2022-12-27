import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatBtn from '../components/FloatBtn';

test('renders a svg whatsapp icon', () => {
    const {container} = render(<FloatBtn />)
    
    expect(container.querySelector("svg")).toBeInTheDocument()
});
test('must have height of 40px', () => {
    const {container} = render(<FloatBtn />)
    
    expect(container.querySelector("svg")).toHaveAttribute("height","40")
});