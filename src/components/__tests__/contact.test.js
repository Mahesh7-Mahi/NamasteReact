import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe(("Contact Us Page test cases"), () => {

    afterAll(() => {
        console.log("After All");
    })

    afterEach(() => {
        console.log("After Each");
    })

    beforeAll(() => {
        console.log("Before All");
    })

    beforeEach(() => {
        console.log("Before Each")
    })

it("Should load contact us component",() => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

})

it("should load button inside the component", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
})

test("should load input inside the component", () => {

    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    //Assertion
    expect(input).toBeInTheDocument();
})

test("should load two input boxes", () => {

    render(<Contact />)

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes.length)

    //assertion
    expect(inputBoxes.length).toBe(2)

})
});

