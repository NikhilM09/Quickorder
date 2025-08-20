import React from "react"
import User from "./User"
import UserClass from "./Userclass"

// const About = () => {
//     return (
//         <>
//         <div>This is about component</div>
//         <User 
//             name="Aditya Functional"
//             location="mumbai"
//             contact="100"
//         />
//         <UserClass
//             name="Sameet Classes"
//             location="mumbai"
//             contact="108"
//         />
//         </>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor is called")
        this.state={
            count : 3
        }
    }
    
    componentDidMount(){
        console.log("Parent componentDidMount is called")
    }

    componentDidUpdate(){
        console.log("Parent componentDidUpdate is called")
    }
    
    render(){
        console.log("parent render is called")
        return(
            <>
         <div>This is about component</div>
         <button className="bg-green-200 p-2" onClick={()=>this.setState({count : this.state.count+2})}>Increase parent count</button>
         <User 
             name="Aditya Functional"
             location="mumbai"
             contact="100"
         />
         <UserClass
             name="Child1"
             location="mumbai"
             contact="108"
         />
         {/* <UserClass
             name="Child2"
             location="mumbai"
             contact="110"
         />
         <UserClass
             name="Child3"
             location="mumbai"
             contact="110"
         /> */}
         </>
        )
    }
}

export default About