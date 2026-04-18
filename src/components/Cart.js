import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center mx-10 p-4">
            <div className="text-2xl font-bold">Cart</div>
            <div className="border-gray-200 flex justify-center">
                <ItemList items={cartItems}/>
            </div>
            {cartItems.length == 0 && (<h1 className="font-semibold my-4">Cart is empty. Add Items to the cart!</h1>)}
            <button className="align-middle font-bold backdrop-blur-lg border border-gray-400 cursor-pointer shadow-lg rounded-lg px-4 py-2 my-4"
            onClick={handleClearCart}>Clear Cart</button>
        </div>
    ) 
}

export default Cart;