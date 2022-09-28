import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import Toggle from "./Toggle"

describe("Toggle", () => {
    it("should have an initial value of 0 / off", () => {
        render(<Toggle />)

        const input = screen.getByLabelText(/toggle is/i)
        // const label = screen.getByText((content, element) => {
        //     // console.log({content, tagName: element.tagName, textContent: element.textContent, match: element.textContent.match(/toggle\sis/i)})
        //     if(element.tagName.toLowerCase() === "label") {
        //         return element.textContent.match(/toggle\sis/i) !== null
        //         // backslashes mit shift + option + 7
        //     }
        // })
        const label = screen.getByTestId("toggle-label")
        // screen.debug()

        // const test = "test"
        // test.startsWith("te")
        // string.match(/test [a-z0-9]/)

        expect(input).toHaveValue("0")
        expect(label.textContent).toContain("off")
    })

    it("should change value on click", async () => {
        render(<Toggle />)

        const input = screen.getByLabelText(/toggle is/i)

        await userEvent.click(input)

        expect(input).toHaveValue("1")
    })

    it("should handle multiple clicks", async () => {
        render(<Toggle />)

        const input = screen.getByLabelText(/toggle is/i)

        await userEvent.click(input)

        expect(input).toHaveValue("1")

        await userEvent.click(input)

        expect(input).toHaveValue("0")

        await userEvent.click(input)

        expect(input).toHaveValue("1")

        await userEvent.click(input)

        expect(input).toHaveValue("0")
    })
})