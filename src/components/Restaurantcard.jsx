import { IMG_URL } from "../constants"

const Restaurantcard = (props) =>{
    // const props = {
    //     title : ,
    //     rating :,
    //     deliveryTime :",
    //     cuisines : "",
    //     location : ""
    // }
    console.log("props", props)
    const {title, rating, deliveryTime, cuisines, location, address} = props
    return(
        <div className="w-full">
            <div className="w-full rounded-xl overflow-hidden">
                <img className="w-full h-44 object-cover" src={IMG_URL} alt="restaurant"/>
            </div>
            <div>
                <h3 className="font-bold text-xl">{title}</h3>
                <div className="flex gap-3 font-medium text-[16px]">
                    <p>⭐{rating}</p>
                    <p>{deliveryTime}</p>
                </div>
                <p className="text-[16px] text-gray-700">{cuisines}</p>
                <p className="text-[16px] text-gray-700">{location}</p>
                                <p className="text-[16px] text-gray-700">{address}</p>

            </div>
        </div>
    )
}

export default Restaurantcard