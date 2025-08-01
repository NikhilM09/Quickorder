import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmercard from "./Shimmer";

const Cardcontainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
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
      console.log("data", data);
      if (!data.ok) {
        switch (data.status) {
          case 401:
            throw new Error("Unauthorized request");
          case 402:
            throw new Error("Payment required");
          case 403:
            throw new Error("Forbidden content");
          case 405:
            throw new Error("Not found");
          default:
            throw new Error("Something went wrong");
        }
      }
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
      setErrorMessage(err.message);
      console.log("err", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const newArray = restaurantData?.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.trim())
    );
    console.log("new Array", newArray);
    setFilteredData(newArray);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("component rendered");

  if (isLoading) {
    return (
      <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15 place-items-center">
        {new Array(20).fill(0).map((item, index) => {
          return <Shimmercard key={index} />;
        })}
      </div>
    );
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <>
      <div className="container px-8">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          className="w-full max-w-[300px] border border-gray-400 hover:border-black p-1"
          placeholder="Enter name of restaurant"
        />
        <button
          onClick={handleSearch}
          className="p-2 rounded-lg bg-green-300 mx-2"
        >
          Search🔍
        </button>
      </div>

      {filteredData.length === 0 ? (
        <h1>No restaurants match your search</h1>
      ) : (
        <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15 place-items-center">
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
        </div>
      )}
    </>
  );
};

export default Cardcontainer;
