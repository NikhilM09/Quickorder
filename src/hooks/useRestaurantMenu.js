import { createUrl } from "../utils/helper";
import {useState, useEffect} from 'react'

const useRestaurantMenu = (title) => {
  const [resInfo, setResInfo] = useState(null);
  const [normalMenu, setNormalMenu] = useState([]);
  const [nestedMenu, setNestedMenu] = useState([]);
  
  const getMenuData = async () => {
    try {
      const API_URL = createUrl(title);
      console.log("API_URL", API_URL);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const json = await response.json();
      console.log(
        "json",
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
      const collection =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const categoryList = collection.filter(
        (item) =>
          item?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      const nestedcategoryList = collection.filter(
        (item) =>
          item?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
      setNormalMenu(categoryList);
      setNestedMenu(nestedcategoryList);
      console.log("nestedcategoryList", nestedcategoryList);
      console.log("categoryList", categoryList);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getMenuData();
  }, []);

 const menuData = {
    resInfo,
    normalMenu,
    nestedMenu
 }

  return menuData;
};

export default useRestaurantMenu;
