import { render, screen } from '@testing-library/react';
import { Greet } from './greet';


test('Greet Renders Correctly', () => {
    //the virtual DOm
    render(<Greet />)
    //the regex /hello/ to display event if its in small caps
    const testElement = screen.getByText(/hello/i)
    expect(testElement).toBeInTheDocument()

}) 