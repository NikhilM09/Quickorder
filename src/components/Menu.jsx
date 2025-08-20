import { useParams, useLocation } from "react-router"
import { createUrl, extractResId } from "../utils/helper";
import Category from "./Category";
import Restaurantcard from "./Restaurantcard";
import NestedCategory from "./NestedCategory";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const Menu = () =>{
    const params = useParams();
    const restaurantMenu =  useRestaurantMenu(extractResId(params.title))
    const {resInfo, normalMenu, nestedMenu} = restaurantMenu

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