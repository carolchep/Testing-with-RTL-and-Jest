import { Application } from "./application";
import {getByRole, render,screen } from "@testing-library/react"

describe('Application',()=>{
    test('renders correctly',()=>{
        render(<Application/>)
        const element= screen.getByRole('textbox',{
            name:'Name'
        })  
        expect(element).toBeInTheDocument()

        const jobLocation = screen.getByRole('combobox')
        expect(jobLocation).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButton =screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
        const BioElement =screen.getByRole('textbox',{
            name:'Bio'
        })
        expect(BioElement).toBeInTheDocument()
        const pageHeading =screen.getByRole('heading',{
            level : 1
        })
       expect(pageHeading).toBeInTheDocument()
    })
})
//other getByRole options are name,level,hidden,selected,pressed