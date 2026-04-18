import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search res List for burger test input", async () => {

    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeSearch.length).toBe(9)

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value:"Burger"}});

    fireEvent.click(searchBtn)

    const cards = screen.getAllByTestId("resCard");

    //Assertion
    expect(cards.length).toBe(1);
});


it("Should top rated restaurants", async () => {

    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeSearch.length).toBe(9)

    const topRatedResBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedResBtn)

    const cards = screen.getAllByTestId("resCard");

    //Assertion
    expect(cards.length).toBe(3);
});