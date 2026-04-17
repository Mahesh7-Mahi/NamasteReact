import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) =>{
  const {resData} = props
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    locality
  } = resData?.info || {}
  return (
    <div className="w-[280px] cursor-pointer mx-10 hover:scale-[0.97] transition duration-200 cursor-pointer bg-white">
      <div className="relative rounded-2xl">
        <img className="w-full h-[180px] object-cover" src={CDN_URL + resData?.info?.cloudinaryImageId}/>

        <p className="absolute bottom-3 text-white font-extrabold text-lg">
          {costForTwo}
        </p>
      <div/>

      <div className="mt-3 px-1 bg-white">
        <h2 className="text-[18px] font-extrabold text-gray-900 leading-tight">
          {name}
        </h2>
        <div className="flex items-center gap-2 mt-1 text-[15px] font-semibold text-gray-800">
          <div className="flex items-center gap-1">
            <span className="bg-green-600 text-white text-xs px-2 py-[2px] rounded-full">
              ★
            </span>
            <span className="font-semibold">{avgRating}</span>
          </div>
          <span>•</span>
          <span>{resData.info?.sla?.deliveryTime}</span>
          <span className="font-semibold">mins</span>
          <span>•</span>
          <span>{resData?.info?.aggregatedDiscountInfoV3?.header}</span>
        </div>
        <p className="text-gray-500 text-[15px] mt-1 truncate">
          {cuisines?.join(", ")}
        </p>
        <p className="text-gray-900 text-[16px] font-bold mt-1">
          {locality}
        </p>
        <p className="text-gray-900 text-[16px] font-bold mt-1">
          {costForTwo}
        </p>
      </div>
      </div>
    </div>
  )
};

export const withPromotedLable = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <span className="absolute ml-10 bg-black text-white text-xs px-2 py-1 rounded z-10">Promoted</span>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;