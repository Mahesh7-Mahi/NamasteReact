import { fireEvent, render, screen} from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("Should render Header Component with a login button",()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    //const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})

it("should render header component with a cart items 0",() => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0 items)")

    expect(cartItems).toBeInTheDocument();
})

it("should render header component with a cart items 0",() => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //Regex 
    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();
})

it("Should change Login button to Logout on click",()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    //Using fireEvent we can perform the events
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})