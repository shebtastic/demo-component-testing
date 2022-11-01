import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Form from "./Form"

describe("Form", () => {
    it("initial render", () => {
        render(<Form />)

        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/e-mail/i)

        expect(nameInput).toHaveValue("")
        expect(emailInput).toHaveValue("")
    })

    it("should change value on input", async () => {
        render(<Form />)
        const name = "Michael"
        const email = "michael@test.com"

        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/e-mail/i)

        await userEvent.type(nameInput, name)
        await userEvent.type(emailInput, email)

        expect(nameInput).toHaveValue(name)
        expect(emailInput).toHaveValue(email)
    })

    it("should trigger onSubmit prop on submit", async () => {
        const onSubmit = jest.fn()

        render(<Form onSubmit={onSubmit} />)
        const name = "Michael"
        const email = "michael@test.com"

        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/e-mail/i)
        const submitButton = screen.getByText("Submit")

        await userEvent.type(nameInput, name)
        await userEvent.type(emailInput, email)
        await userEvent.click(submitButton)
        
        expect(onSubmit).toHaveBeenCalled()
    })

    it("should forward form values on submit", async () => {
        const onSubmit = jest.fn() //mocking function, brauchen wir für toHaveBeenCalled...()

        render(<Form onSubmit={onSubmit} />)
        const name = "Michael"
        const email = "michael@test.com"

        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/e-mail/i)
        const submitButton = screen.getByText("Submit")

        await userEvent.type(nameInput, name)
        await userEvent.type(emailInput, email)
        await userEvent.click(submitButton)
        
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith({ name, email })
    })

    it("should initialize inputs on reset", async () => {
        render(<Form />)
        const name = "Michael"
        const email = "michael@test.com"
        //womit fangen wir an - haben wir schon
        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/e-mail/i)
        // screen.getByRole focussiert aria roles / also screenreader features
        // screen.getByTestId sucht nach data-test-id attribute
        const resetButton = screen.getByText("Reset")
        //erst was in name eintippen
        await userEvent.type(nameInput, name)
        //erst was in email eintippen
        await userEvent.type(emailInput, email)
        //steht auch was drin?
        expect(nameInput).toHaveValue(name)
        expect(emailInput).toHaveValue(email)
        //reset button drücken
        await userEvent.click(resetButton)
        //steht nichtsmehr drin?
        expect(nameInput).toHaveValue("")
        expect(emailInput).toHaveValue("")
    })

    it.todo("ein fall den ich testen würde, aber nicht getan habe")
    it.skip("broken test", () => {
        expect(true).toBe(false)
    })
})