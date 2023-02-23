import { Application } from "./application";
import { getByRole, render, screen } from "@testing-library/react"

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />)
        const element = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(element).toBeInTheDocument()

        const jobLocation = screen.getByRole('combobox')
        expect(jobLocation).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
        const BioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(BioElement).toBeInTheDocument()
        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()
    })
})
//other getByRole options are name,level,hidden,selected,pressed
describe('getBylabelText', () => {
    test.skip('should getLabelBytEext', () => {
        render(<Application />)
        const nameElement2 = screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument()
    })
    test('input with similar label', () => {
        render(<Application />)
        const nameElement3 = screen.getByLabelText('Name', {
            selector: "input"
        })
        const nameElement4 = screen.getByLabelText('Name', {
            selector: "select"
        })
        expect(nameElement4).toBeInTheDocument()
    })
    test('getByPlaceHolderText', () => {
        render(<Application />)
        const placeholder = screen.getByPlaceholderText("Fullname")
        expect(placeholder).toBeInTheDocument()
    })
    test('getByText',()=>{
        render(<Application/>)
        //getBytText can also take the select option as in getByPlaceHolderText
        const paragraphElement=screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()
    })
    test('getByDisplayValue',()=>{
        render(<Application/>)
        const name=screen.getByDisplayValue("Carol")
        expect(name).toBeInTheDocument()
    })

})