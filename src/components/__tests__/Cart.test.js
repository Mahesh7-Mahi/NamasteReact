import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from "../mocks/cartMockData.json"
import { act } from "react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/AppStore"
import Header from "../Header"
import Cart from "../Cart"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load menu component", async() => {

    await act( async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu />
                <Cart />
            </Provider>
    </BrowserRouter>
) )

    const accordianHeader = screen.getByText("Recommended (3)");

    fireEvent.click(accordianHeader);

    const catogeryLen =  screen.getAllByTestId("fooditems");

    expect(catogeryLen.length).toBe(3);

    const cartItems = screen.getByText("Cart (0 items)")

    expect(cartItems).toBeInTheDocument();

    //const item = screen.getByText("Margherita Pizza")

    const addBtns = screen.getAllByRole("button",{name:"ADD"})

    fireEvent.click(addBtns[0])

    const cartItemsLen = screen.getByText("Cart (1 items)")

    expect(cartItemsLen).toBeInTheDocument();

    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(5);

    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}))

    expect(screen.getAllByTestId("fooditems").length).toBe(3);

    expect(screen.getByText("Cart is empty. Add Items to the cart!"))
    
})