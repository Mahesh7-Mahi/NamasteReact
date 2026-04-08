import React from "react";
import ReactDOM from "react-dom/client";


const styleCard = {
  backgroundColor: "#f0f0f0",
}
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46eCjqXAGvpdUn7-uaYNJ43XrPbwyDtynuAx4DpQm9cvAiYPTLI2c_-0&s"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) =>{
  const {resData} = props
  const {
    name,
    cuisines,
    avgRating,
    costForTwo
  } = resData.data
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.data.sla.deliveryTime} minutes</h4>
    </div>
  )
}

const resObj = [{
  type:"restuarant",
  data:{
    id: "123456",
    name: "Pizza Paradise",
    cloudinaryImageId: "rng/md/carousel/production/pizza123",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
    },

  }
},
{
  type:"restuarant",
  data:{
    id: "123457",
    name: "Pizza Paradise",
    cloudinaryImageId: "rng/md/carousel/production/pizza123",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
    },

  }
},
{
  type:"restuarant",
  data:{
    id: "123458",
    name: "Pizza Paradise",
    cloudinaryImageId: "rng/md/carousel/production/pizza123",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
    },

  }
},
{
  type:"restuarant",
  data:{
    id: "123459",
    name: "Pizza Paradise",
    cloudinaryImageId: "rng/md/carousel/production/pizza123",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
    },

  }
},
{
  type:"restuarant",
  data:{
    id: "123460",
    name: "Pizza Paradise",
    cloudinaryImageId: "rng/md/carousel/production/pizza123",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
    },

  }
},
{
  type:"restuarant",
  data:{
    id: "123462",
    name: "Pizza Paradise",
    cloudinaryImageId: "rng/md/carousel/production/pizza123",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
    },

  }
}
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resObj.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
