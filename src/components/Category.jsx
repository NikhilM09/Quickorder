import MenuItem from "./MenuItem";

const Category = ({
  title,
  collection
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {collection.map((dish) => {
        return (
          <MenuItem
            name={dish?.card?.info?.name}
            isVeg={dish?.card?.info?.isVeg}
            price={dish?.card?.info?.price}
            description={dish?.card?.info?.description}
            imgUrl={dish?.card?.info?.imageId}
          />
        );
      })}
    </div>
  );
};

export default Category;
