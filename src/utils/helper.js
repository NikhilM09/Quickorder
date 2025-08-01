export const modifyString = (str) =>{
    return str.toLowerCase().replace(/\s+/g, "-")
}

export const extractResId = (str) =>{
    console.log("string", str.match(/(?<=rest)\d+/))
    return str.match(/(?<=rest)\d+/)[0]
}

export const createUrl = (id) =>{
    return (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9581934&lng=72.8320729&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
}

