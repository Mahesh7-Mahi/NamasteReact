import { useContext, useState } from "react";
import { LOGO_URL,PNG_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import swiggy from "../../public/swiggy.png"
import UserContext from "../utils/UserContext";


const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  console.log(loggedInUser)

  return (
    <div className="flex items-center justify-between px-8 py-3 shadow-md bg-white">
      <div className="">
        <img src={PNG_URL} className="w-8 h-10" alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex px-5">
          <li className="flex items-center gap-2 cursor-pointer hover:text-black px-4">
            Online Status: {onlineStatus? "🟢" : "🔴"}
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-black px-4">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-black px-4">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-black px-4">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-black px-4">
            <Link className="nav-link" to="/grocery">Grocery</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-black">Cart</li>
          <button className="align-middle backdrop-blur-lg border border-gray-400 cursor-pointer rounded-lg px-4 py-2 ml-5 h-10" onClick={
            () => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          }>{btnName}</button>
          <li className="flex items-center gap-2 cursor-pointer hover:text-black mx-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>



  );
};

export default Header;