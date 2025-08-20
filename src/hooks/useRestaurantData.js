import {useState, useEffect} from 'react'
import { API_URL } from '../utils/constants';

const useRestaurantData = () =>{
      const [restaurantData, setRestaurantData] = useState([]);
      const [filteredData, setFilteredData] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [errorMessage, setErrorMessage] = useState("");
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
    
      useEffect(() => {
        getData();
      }, []);

      const resObject = {
        isLoading,
        errorMessage,
        restaurantData,
        setFilteredData,
        filteredData
      }

      
    return resObject

}

export default useRestaurantData