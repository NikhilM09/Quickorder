import { useState } from "react";

const Searchbar = ({data, updater }) =>{
    const [searchText, setSearchText] = useState("")
    const handleSearch = () => {
    const newArray = data?.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.trim())
    );
    console.log("new Array", newArray);
    updater(newArray);
  };
    
    return(
        <>
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
        </>
    )
}

export default Searchbar