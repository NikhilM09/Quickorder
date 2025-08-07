import { useParams, useLocation } from "react-router"
import { createUrl, extractResId } from "../utils/helper";
import { useEffect, useState } from "react";
import Category from "./Category";
import Restaurantcard from "./Restaurantcard";
import NestedCategory from "./NestedCategory";

const Menu = () =>{
    const params = useParams();
    console.log("useParams", extractResId(params.title));
    const [resInfo, setResInfo] = useState(null)
    const [normalMenu, setNormalMenu] = useState([])
    const [nestedMenu, setNestedMenu] = useState([])
    const getMenuData = async() =>{
        try{
            const API_URL = createUrl(extractResId(params.title));
            console.log("API_URL", API_URL);
            const response = await fetch(API_URL);
            if(!response.ok){
                throw new Error("Something went wrong")
            }
            const json = await response.json()
            console.log("json", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            setResInfo(json?.data?.cards[2]?.card?.card?.info)
            const collection = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const categoryList = collection.filter((item)=>item?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            const nestedcategoryList = collection.filter((item)=>item?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
            setNormalMenu(categoryList);
            setNestedMenu(nestedcategoryList);
            console.log("nestedcategoryList", nestedcategoryList)
            console.log("categoryList", categoryList)
        }
        catch(err){
            console.log("err", err)
        } 
    }

    useEffect(()=>{
        getMenuData()
    }, [])


    if(!resInfo){
        return <h1>Loading.......</h1>
    }
    return (
        <div className="w-10/12 flex flex-col gap-8 mx-auto max-w-4xl">
            <Restaurantcard 
                name={resInfo?.name}
                avgRating={resInfo?.avgRating}
                costForTwo={resInfo?.costForTwoMessage}
                cuisines={resInfo?.cuisines}
                locality={resInfo?.locality}
            />
            {
              normalMenu.map((menuitem) => {
                return (
                    <Category title={menuitem?.card?.card?.title}
                    collection={menuitem?.card?.card?.itemCards}
                    />
                )
              } )  
            }
            {
                nestedMenu.map((nestedCategory)=>{
                    return(
                        <NestedCategory
                            mainCategory={nestedCategory?.card?.card?.title}
                            categoryCollection={nestedCategory?.card?.card?.categories}
                        />
                    )
                })
            }
        </div>
    )
}

export default Menu