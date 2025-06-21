import Filters from "./Filters";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";

const Body = () => {
  return (
    <div>
      This is body component
      <div className="p-3">
        <div className="flex  justify-between">
          <Searchbar />
          <Filters />
        </div>
        <Cardcontainer />
      </div>
    </div>
  );
};

export default Body;
