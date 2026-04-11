import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfrestaurants, setListOfRestaurant] = useState([]);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.541192&lng=78.366166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData = await data.json();

        console.log(jsonData);
        setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfrestaurants?.length == 0){
        return <Shimmer />
    }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
            const filteredRestaurants = listOfrestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
            setfilteredRestaurants(filteredRestaurants)
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfrestaurants.filter((restaurant => restaurant?.info?.avgRating > 4))
            setfilteredRestaurants(filteredList)
        }}>Top Rated Restuarant</button>
      </div>
      <div className="res-container">
        {
          filteredRestaurants.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
}

export default Body;