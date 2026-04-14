import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{

    constructor(props){
        super(props)

        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("parent componentDidMount");
    }

    render(){
        console.log("Parent render")
        return (
            <div>
                <h2>About</h2>
                {/* <User name={"Mahesh Reddy (function)"} location={"Bodhan (function)"}/> */}
                <UserClass name={"First"} location={"Bodhan (class)"}/>
                {/* <UserClass name={"Second"} location={"US (class)"}/> */}
            </div>
        );
    }
}

export default About;