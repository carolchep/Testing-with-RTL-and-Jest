import { render, screen } from '@testing-library/react';
import { Greet } from './greet';


// test('Greet Renders Correctly', () => {
//     //the virtual DOm
//     render(<Greet />)
//     //the regex /hello/ to display event if its in small caps
//     const testElement = screen.getByText(/hello/i)
//     expect(testElement).toBeInTheDocument()

// }) 
// TDD
// Greet should render the text hello and if
//  name is passed into the component it should render hello follwed by the name
describe('Greet', () => {
    test(' renders correctly', () => {
        render(<Greet />)
        const testElement = screen.getByText('Hello')
        expect(testElement).toBeInTheDocument()

    })
    describe('Nested', () => {
        test('Greet renders with a name', () => {
            render(<Greet name='carol' />)
            const testElement = screen.getByText('Hello carol')
            expect(testElement).toBeInTheDocument()

        })

    })



})
//multiple Nested GRoups
describe('Nested', () => {
    test('Greet renders with a name', () => {
        render(<Greet name='carol' />)
        const testElement = screen.getByText('Hello carol')
        expect(testElement).toBeInTheDocument()

    })
})