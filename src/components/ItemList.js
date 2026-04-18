import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }

    return(
    <div className=" text-center">
        {items.map((item,index) => (
        <div key={index} className="p-2 m-2 border-gray-200 py-8 border-b-2 flex justify-between items-start">
            <div className="text-left w-3/4">
                <span className="font-semibold">{item?.card?.info?.name}</span>
                <p className="font-semibold"> ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>
                <p className=" text-xs">{item?.card?.info?.description}</p>
            </div> 
            <div className="w-1/4 flex justify-end">    
                <div className="relative">
                    <img src={CDN_URL+item?.card?.info?.imageId} className="w-24 rounded-lg"/>
                    <button className=" cursor-pointer absolute bottom-[-11px] left-1/2 -translate-x-1/2 bg-white text-green-600 font-semibold px-4 py-1 rounded-lg shadow-md border" onClick={() => handleAddItem(item)}>
                        ADD
                    </button>
                </div>
            </div>
        </div>))}
    </div>
    );
};

export default ItemList;