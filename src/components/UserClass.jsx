import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count : 0,
            count2 : 20
        }
        console.log(this.props.name + "constructor is called")
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("setInterval is added")
        }, 1000)
        console.log(this.props.name + "componentDidMount is called")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Component will unmount is called")
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
                console.log(this.props.name + " count variable is updated")
        }
        if(prevState.count2 !== this.state.count2){
                console.log(this.props.name + " count2 variable is updated")
        }
    }

    render(){
        console.log(this.props.name + "render is called")
        return(
            <div>
            <div>Name : {this.props.name} </div>
            <div>Location : {this.props.location}</div>
            <div>Count : {this.state.count}</div>
            <button className="bg-green-200 p-2 mx-2" onClick={()=>{
                this.setState({count : this.state.count+1})
            }}>Increase Count</button>
            <button className="bg-red-200 p-2" onClick={()=>{
                this.setState({count2 : this.state.count2+1})
            }}>Increase Count2</button>
            </div>
        )
    }
}

export default UserClass