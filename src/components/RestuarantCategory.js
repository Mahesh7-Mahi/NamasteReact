//import { data } from "react-router-dom";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        showItems ? setShowItems(false):setShowItems(true);
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-md cursor-pointer rounded-4xl">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold cursor-pointer">{data.title} ({data.itemCards.length})</span>
                    <span>⏷</span>
                </div>
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>  
        </div>
    )
}

export default RestaurantCategory;