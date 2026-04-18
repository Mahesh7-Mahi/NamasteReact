import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(0);

   const { resId } = useParams();

    const resInfo = useRestuarantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating,totalRatingsString,locality,areaName } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  const catogery = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

  return (
    <div>
      
    <div className=" gap-1 px-4 py-3 flex flex-col gap-1 mx-50 my-10 bg-gray-50  border-2 border-gray-200 rounded-4xl shadow-md">
        <h1 className="font-extrabold">{name}</h1>
        <div className="flex gap-1">
            <span className="bg-green-600 text-white text-xs px-2 py-[2px] rounded-full w-6 h-6 flex items-center justify-center font-bold">
              ★
            </span>
            <span className="font-semibold">{avgRating}</span>
            <span className="font-semibold">{"("+totalRatingsString+")"}</span>
            <span>•</span>
            <span className="font-semibold">{costForTwoMessage}</span>
        </div>
        <div>
          <p>
            <span className="font-semibold underline text-orange-500">{cuisines.join(", ")}</span>
          </p> 
        </div>
        <div className="flex gap-3">
            <span className="font-semibold">Outlate</span>
            <span className="font-semibold">{locality || areaName}</span>
        </div>
        <div>
          <span className="font-semibold">Closed & not delivering</span>
        </div>
        
    </div>
    <div className="text-center font-bold">
      ~ MENU ~
    </div>
    <div>
        {
      catogery.map((catogery,index) => (
        //controlled component
        <RestaurantCategory key={index} data = {catogery?.card?.card} showItems ={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}/>
      ))
    }
    </div>
    
    </div>
  );
};

export default RestaurantMenu;