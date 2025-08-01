import { IMG_URL } from "../utils/constants"

const MenuItem = ({isVeg=1, name, price, description, imgUrl}) =>{
    
    return(
        <div className="flex justify-between">
            <div>
                <p>{isVeg ? '🟢' : '🔴'}</p>
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <div>
                <img src={IMG_URL+imgUrl}/>
            </div>
        </div>
    )
}

export default MenuItem