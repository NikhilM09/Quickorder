import Restaurantcard from "./Restaurantcard";
import Shimmercard from "./Shimmer";
import Searchbar from "./Searchbar";
import useRestaurantData from "../hooks/useRestaurantData";

const Cardcontainer = () => {
  const resData = useRestaurantData()
  const {isLoading, errorMessage, restaurantData, setFilteredData, filteredData} = resData;
  console.log("component rendered", resData);

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
        <Searchbar 
        data={restaurantData}
        updater={setFilteredData}/>
      </div>

      {filteredData.length === 0 ? (
        <h1>No restaurants match your search</h1>
      ) : (
        <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15 place-items-center">
          {filteredData.map((restaurant, index) => {
            return (
              <Restaurantcard
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
