import { Application } from "./application";
import {getByRole, render,screen } from "@testing-library/react"

describe('Application',()=>{
    test('renders correctly',()=>{
        render(<Application/>)
        const element= screen.getByRole('textbox')  
        expect(element).toBeInTheDocument()
        
        const jobLocation = screen.getByRole('combobox')
        expect(jobLocation).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButton =screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()

    })
})
