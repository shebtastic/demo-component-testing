import { screen, render, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"

import Form from "./Form"

describe("Form", () => {
    it("should change value on input", async () => {
        render(<Form />)

        const nameInput = screen.getByLabelText("Name:")
        const emailInput = screen.getByLabelText("mail", { exact: false })

        expect(nameInput).toHaveValue("")
        expect(emailInput).toHaveValue("")

        await userEvent.type(nameInput, "Michael")
        await userEvent.type(emailInput, "michael@test.com")

        expect(nameInput).toHaveValue("Michael")
        expect(emailInput).toHaveValue("michael@test.com")
    })

    it("should trigger onSubmit prop on submit", async () => {
        const onSubmit = jest.fn()

        render(<Form onSubmit={onSubmit}/>)

        const submitButton = screen.getByText("Submit")

        await userEvent.click(submitButton)

        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toBeCalledWith({email: "", name: ""})
    })

    it("should forward form values on submit", async () => {
        const onSubmit = jest.fn()

        render(<Form onSubmit={onSubmit}/>)

        const submitButton = screen.getByText("Submit")
        const nameInput = screen.getByLabelText("Name:")
        const emailInput = screen.getByLabelText("E-Mail:")

        await userEvent.type(nameInput, "Michael")
        await userEvent.type(emailInput, "michael@test.com")
        await userEvent.click(submitButton)

        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toBeCalledWith({ name: "Michael", email: "michael@test.com"})
    })
    //fuzzy testing
    //kommt aus chaos engineering

    it("should initialize inputs on reset", async () => {
        render(<Form />)

        const resetButton = screen.getByText("Reset")
        const nameInput = screen.getByLabelText("Name:")
        const emailInput = screen.getByLabelText("E-Mail:")

        await userEvent.type(nameInput, "Michael")
        await userEvent.type(emailInput, "michael@test.com")
        await userEvent.click(resetButton)

        expect(nameInput).toHaveValue("")
        expect(emailInput).toHaveValue("")
    })
})