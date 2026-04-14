import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestuarantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);
    }

    return resInfo;

}

export default useRestuarantMenu;