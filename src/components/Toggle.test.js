import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Toggle from "./Toggle";

describe("Toggle", () => {
  it("renders without crashing", () => {
    render(<Toggle />);
    // screen.debug()
  });

  it("should have an initial value of 0 / off", () => {
    //given
    render(<Toggle />);

    //when
    // /i für caseInsensitive
    const label = screen.getByText(/the toggle is/i); //regex - regular expression - regulärer ausdruck
    const input = screen.getByLabelText(/the toggle is/i);

    //then
    // screen.debug()
    expect(label.textContent).toContain("off");
    expect(input).toHaveValue("0");
  });

  it("should change value on click", async () => {
    //given
    render(<Toggle />);

    //when
    // /i für caseInsensitive
    const label = screen.getByText(/the toggle is/i); //regex - regular expression - regulärer ausdruck
    const input = screen.getByLabelText(/the toggle is/i);

    await userEvent.click(input)

    //then
    // screen.debug()
    expect(label.textContent).toContain("on");
    expect(input).toHaveValue("1");
  });

  it("should handle multiple clicks", async () => {
    render(<Toggle />)

    const input = screen.getByLabelText(/toggle is/i)

    expect(input).toHaveValue("0")
    await userEvent.click(input)
    expect(input).toHaveValue("1")
    await userEvent.click(input)
    expect(input).toHaveValue("0")
    await userEvent.click(input)
    expect(input).toHaveValue("1")
    await userEvent.click(input)
    expect(input).toHaveValue("0")
    await userEvent.click(input)
    expect(input).toHaveValue("1")
    await userEvent.click(input)
    expect(input).toHaveValue("0")
    await userEvent.click(input)
    expect(input).toHaveValue("1")
    await userEvent.click(input)
    expect(input).toHaveValue("0")
  })
});
