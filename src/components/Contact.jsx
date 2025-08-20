import { useEffect } from "react"

const Contact = () => {

    useEffect(()=>{
        const addTimer = setInterval(()=>{
            console.log("Interval added in function based component")
        }, 1000)

        return ()=>{
            console.log("useEffect return statement is called")
            clearInterval(addTimer)
        }
        
    },[])

    return (
        <div>This is Contact component</div>
    )
}

export default Contact