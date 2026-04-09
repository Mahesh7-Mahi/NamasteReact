import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfrestaurants, setListOfRestaurant] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfrestaurants.filter((restaurant => restaurant.data.avgRating > 4))
            setListOfRestaurant(filteredList)
        }}>Top Rated Restuarant</button>
      </div>
      <div className="res-container">
        {
          listOfrestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
}

export default Body;