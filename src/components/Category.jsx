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
            {...dish?.card?.info}
          />
        );
      })}
    </div>
  );
};

export default Category;
