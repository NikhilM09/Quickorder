import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import { API_URL } from "../constants";

const Cardcontainer = () => {
  
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState("")
  const resData = [
    {
      title: "mcdonalds",
      rating: 4.5,
      deliveryTime: "25-30 min",
      cuisines: "burgers, desserts, beverages",
      location: "Bhandup",
    },
    {
      title: "ccd",
      rating: 4,
      deliveryTime: "40 min",
      cuisines: "coffee, tea, cappucino ",
      location: "Bandra",
    },
    {
      title: "starbucks",
      rating: 3.5,
      deliveryTime: "40 min",
      cuisines: "coffee, tea, cappucino ",
      location123: "Cuffe parade",
      location1234: "",
    },
  ];
  // let count = 1

  const getData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(
        "json",
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestaurantData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSearch = () =>{
    const newArray = restaurantData?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.trim()));
    console.log("new Array", newArray);
    setFilteredData(newArray)
  }
  useEffect(() => {
    getData();
  }, []);

  console.log("component rendered");

  return (
    <>
      <div className="container px-8">
          <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value.toLowerCase())} className="w-full max-w-[300px] border border-gray-400 hover:border-black p-1" placeholder="Enter name of restaurant"/>
          <button  onClick={handleSearch} className="p-2 rounded-lg bg-green-300 mx-2">Search🔍</button>
        </div>
      {filteredData && <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15 place-items-center">
        
        {filteredData.map((restaurant, index) => {
          return (
            <Restaurantcard
              // title={restaurant?.info?.name}
              // rating={restaurant?.info?.avgRating}
              // deliveryTime={restaurant?.info?.sla?.slaString}
              // cuisines={restaurant?.info?.cuisines.join(", ")}
              // location={restaurant?.info?.locality}
              // imgId={restaurant?.info?.cloudinaryImageId}
              key={restaurant?.info?.id}
              {...restaurant?.info}
            />
          );
        })}
      </div>}
    </>
  );
};

export default Cardcontainer;
