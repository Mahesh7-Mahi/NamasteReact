import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfrestaurants, setListOfRestaurant] = useState([]);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(" https://namastedev.com/api/v1/listRestaurants");
        
        const jsonData = await data.json();

        console.log(jsonData);
        setListOfRestaurant(jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
          filteredRestaurants.map((restaurant) => 
          <Link className="nav-link" key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}><RestaurantCard resData={restaurant}/></Link>
          )
        }
      </div>
    </div>
  );
}

export default Body;