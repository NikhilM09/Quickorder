import { IMG_URL } from "../constants"

const Restaurantcard = (props) =>{
    // const props = {
    //     title : ,
    //     rating :,
    //     deliveryTime :",
    //     cuisines : "",
    //     location : ""
    // }
    // console.log("props", props)
    const {name, avgRating, sla, cuisines, cloudinaryImageId, locality} = props
    return(
        <div className="w-full">
            <div className="w-full rounded-xl overflow-hidden">
                <img className="w-full h-44 object-cover" src={`${IMG_URL+cloudinaryImageId}`} alt="restaurant"/>
            </div>
            <div>
                <h3 className="font-bold text-xl">{name}</h3>
                <div className="flex gap-3 font-medium text-[16px]">
                    <p>⭐{avgRating}</p>
                    <p>{sla?.slaString}</p>
                </div>
                <p className="text-[16px] text-gray-700">{cuisines.join(", ")}</p>
                <p className="text-[16px] text-gray-700">{locality}</p>

            </div>
        </div>
    )
}

export default Restaurantcard