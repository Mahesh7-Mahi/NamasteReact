import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

    const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (
    <h2>Looks like you're offline, please check your internet connection;</h2>
  );
  }
  
    const {loggedInUser,setUserName} = useContext(UserContext);

    console.log(setUserName);

    if(listOfrestaurants?.length == 0){
        return <Shimmer />
    }

    const PromotedRestuarantCard = withPromotedLable(RestaurantCard);

  return (
    <div className="">
      <div className="flex">
        <div className="m-5">
          <input type="text" className="border border-gray-400 h-10 rounded-md w-80 shadow-lg px-2" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button className="bg-green-100 shadow-lg  cursor-pointer px-4 py-2 mx-2 rounded-lg h-10" onClick={()=>{
            const filteredRestaurants = listOfrestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
            setfilteredRestaurants(filteredRestaurants)
          }}>Search</button>
        </div>
        <div className="m-5">
          <label className="font-semibold">UserName: </label>
          <input type="text" className="border border-gray-400 h-10 rounded-md w-80 shadow-lg px-2" value={loggedInUser} onChange={(e)=>{
            setUserName(e.target.value)}}/>
        </div>
        <div className="m-5">
          <button className=" align-middle font-bold backdrop-blur-lg border border-gray-400 cursor-pointer shadow-lg rounded-lg px-4 py-2 mx-2 h-10" onClick={()=>{
              const filteredList = listOfrestaurants.filter((restaurant => restaurant?.info?.avgRating > 4))
              setfilteredRestaurants(filteredList)
          }}>Top Rated Restuarant</button>
        </div>
      </div>
      <div className="flex flex-wrap mx-15 my-15 gap-y-20 justify-evenly">
        {
          filteredRestaurants.map((restaurant) => 
          <Link className="nav-link" key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}>
            
            {
              restaurant.info.avgRating <= 4.5 ? <PromotedRestuarantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
            }
            
          </Link>
          )
        }
      </div>
    </div>
  );
}

export default Body;