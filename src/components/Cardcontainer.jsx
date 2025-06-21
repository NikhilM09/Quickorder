import Restaurantcard from "./Restaurantcard";

const Cardcontainer = () => {
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
    {
      title: "mcdonalds",
      rating: 4.5,
      deliveryTime: "25-30 min",
      cuisines: "burgers, desserts, beverages",
      location123: "Bhandup",
    },
    {
      title: "ccd",
      rating: 4,
      deliveryTime: "40 min",
      cuisines: "coffee, tea, cappucino ",
      location123: "Bandra",
    },
    {
      title: "starbucks",
      rating: 3.5,
      deliveryTime: "40 min",
      cuisines: "coffee, tea, cappucino ",
      location123: "parade",
    }
  ];

  return (
    <>
      <div>This is Cardcontainer component</div>
      <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15 place-items-center">
        {resData.map((restaurant, index) => {
          return (
            <Restaurantcard
            //   title={restaurant?.title}
            //   rating={restaurant?.rating}
            //   deliveryTime={restaurant?.deliveryTime}
            //   cuisines={restaurant?.cuisines}
            //   location={restaurant?.location}
            {...restaurant}
            />
          );
        })}

        
      </div>
    </>
  );
};

export default Cardcontainer;
