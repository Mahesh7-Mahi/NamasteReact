import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h2 className="text-lg font-semibold">{loggedInUser}</h2> }
                    </UserContext.Consumer>
                </div>
                {/* <User name={"Mahesh Reddy (function)"} location={"Bodhan (function)"}/> */}
                <UserClass name={"First"} location={"Bodhan (class)"}/>
                {/* <UserClass name={"Second"} location={"US (class)"}/> */}
            </div>
        );
    }
}

export default About;