import { IMG_URL } from "../utils/constants"

const MenuItem = ({isVeg=1, name, price, description, imgUrl, defaultPrice}) =>{
    
    return(
        <div className="flex items-center justify-between my-5 shadow-2xl rounded-xl p-3">
            <div className="w-8/12">
                <p>{isVeg ? '🟢' : '🔴'}</p>
                <p>{name}</p>
                <p>₹ {price ? price/100 : defaultPrice/100}</p>
                <p>{description}</p>
            </div>
            <div className="w-3/6 max-w-36">
                <img className="w-full" src={IMG_URL+imgUrl}/>
            </div>
        </div>
    )
}

export default MenuItem