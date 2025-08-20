import {useState} from 'react'

const User = ({name, location, contact}) =>{
    const [count, setCount] = useState(5)
    const [count2, setCount2] = useState(10)

const handleCount = () =>{
    setCount(count+1)
    console.log("count", count)
}
    return(
        <div>
            <div>Name : {name} </div>
            <div>Location : {location}</div>
            <div>Count is {count}</div>
            <button className="bg-green-200 p-2" onClick={handleCount}>Increase</button>
        </div>
    )
}

export default User