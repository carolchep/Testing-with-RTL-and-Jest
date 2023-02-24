import { Application } from "./application";
import { getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole, getByText, render, screen } from "@testing-library/react"

describe('Application', () => {
    test.skip('renders correctly', () => {
        render(<Application />)
        const element = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(element).toBeInTheDocument()

        // const jobLocation = screen.queryAllByRole('combobox')
        // expect(jobLocation).toBeInTheDocument()

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
    test('getByText', () => {
        render(<Application />)
        //getBytText can also take the select option as in getByPlaceHolderText
        const paragraphElement = screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()
    })
    test('getByDisplayValue', () => {
        render(<Application />)
        const name = screen.getByDisplayValue("Carol")
        expect(name).toBeInTheDocument()
    })
    test('getByAltText', () => {
        render(<Application />)
        // img,input area,customHtml
        const ImageElement = screen.getByAltText("a person with a laptop")
        expect(ImageElement).toBeInTheDocument()
    })
    test('getByTitle', () => {
        render(<Application />)
        const spanTitle = screen.getByTitle("close")
        expect(spanTitle).toBeInTheDocument()
    })
    test('getByTestId', () => {
        render(<Application />)
        const testId = screen.getByTestId("custom-element")
        expect(testId).toBeInTheDocument()
    })
    test.skip('toBeEnabled', () => {
        render(<Application />)
        expect(screen.getByRole('button')).toBeDisabled()
        expect(screen.getByTestId('input')).toBeDisabled()
        expect(screen.getByTestId('empty')).toBeEmptyDOMElement()
        expect(screen.getByTestId('not-empty')).not.toBeEmptyDOMElement()
        expect(screen.getByTestId('with-whitespace')).not.toBeEmptyDOMElement()
        expect(screen.getByTestId('no-aria-invalid')).not.toBeInvalid()
        expect(screen.getByTestId('aria-invalid')).toBeInvalid()
        expect(screen.getByTestId('aria-invalid-value')).toBeInvalid()
        expect(screen.getByTestId('aria-invalid-false')).not.toBeInvalid()

        expect(screen.getByTestId('valid-form')).not.toBeInvalid()
        expect(screen.getByTestId('invalid-form')).toBeInvalid()
    })
    test('An element is required if it is having a required or aria-required="true" attribute', () => {
        render(<Application />)
        expect(screen.getByTestId('required-input')).toBeRequired()
        expect(screen.getByTestId('aria-required-input')).toBeRequired()
        expect(screen.getByTestId('conflicted-input')).toBeRequired()
        expect(screen.getByTestId('aria-not-required-input')).not.toBeRequired()
        expect(screen.getByTestId('optional-input')).not.toBeRequired()
        expect(screen.getByTestId('unsupported-type')).not.toBeRequired()
        expect(screen.getByTestId('select')).toBeRequired()
        expect(screen.getByTestId('textarea')).toBeRequired()
        expect(screen.getByTestId('supported-role-aria')).toBeRequired()
    })

})
test('to be visible', () => {
    render(<Application />)
    expect(screen.getByText('Visible Example')).toBeVisible()
    expect(screen.getByText('Hidden Attribute Example')).not.toBeVisible()
    expect(screen.getByText('Hidden Details Example')).not.toBeVisible()
    expect(screen.getByText('Visible Details Example')).toBeVisible()
    const button = screen.getByTestId('ok-button')

    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).not.toHaveAttribute('type', 'button')

    expect(button).toHaveAttribute('type', expect.stringContaining('sub'))
    expect(button).toHaveAttribute('type', expect.not.stringContaining('but'))
    const deleteButton = screen.getByTestId('delete-button')
    const noClasses = screen.getByTestId('no-classes')

    expect(deleteButton).toHaveClass('extra')
    expect(deleteButton).toHaveClass('btn-danger btn')
    expect(deleteButton).toHaveClass('btn-danger', 'btn')
    expect(deleteButton).not.toHaveClass('btn-link')

    expect(deleteButton).toHaveClass('btn-danger extra btn', { exact: true }) // to check if the element has EXACTLY a set of classes
    expect(deleteButton).not.toHaveClass('btn-danger extra', { exact: true }) // if it has more than expected it is going to fail

    expect(noClasses).not.toHaveClass()
    const input = screen.getByTestId('element-to-focus')

    input.focus()
    expect(input).toHaveFocus()

    input.blur()
    expect(input).not.toHaveFocus()
    expect(screen.getByTestId('login-form')).toHaveFormValues({
        username: 'jane.doe',
        rememberMe: true,
      })
      const element = screen.getByTestId('text-content')

expect(element).toHaveTextContent('Content')
expect(element).toHaveTextContent(/^Text Content$/) // to match the whole content
expect(element).toHaveTextContent(/content$/i) // to use case-insensitive match
expect(element).not.toHaveTextContent('content')

})
//order of queries
// getByRole
// getByLabelText getting the label
// getByPlaceholderText using the placeholder text
// getByText is useful outside forms
// getByDisplayValue getting the defualt value