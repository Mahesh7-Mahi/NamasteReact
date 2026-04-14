import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "dummy",
                location: "dummy"
            }
            //count: 0,
            //count2: 2,
        };

        console.log(this.props.name+"child constructor")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Mahesh7-Mahi");

        const jsonData = await data.json();

        this.setState(
            {
                userInfo: jsonData
            }
        );

        
        console.log(this.props.name+"child componentDidMount");
    }

    componentDidUpdate(){
        console.log(this.props.name+"child componentDidUpdate");
    }

    componentWillUnmount(){
        console.log(this.props.name+"child componentWillUnmount");
    }

    render() {

        console.log(this.props.name+"child render");

        const {name,location, avatar_url} = this.state.userInfo;

        //const {name,location} = this.props

        const {count} = this.state;
        return (
        <div className="user-card">
            <h2>Class Component</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Count Increase</button>
            <br/>
            <br/>
            <img src={avatar_url}/>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Gmail: mahesh@gmail.com</h3>
        </div>
        )
    }
}

export default UserClass;

/**
 * ----MOUNTING----
 * 
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML Dummy>
 * ComponentDidMount 
 *      <API Call>
 *      <this.setState -> State variable updated
 * 
 * ----UPDATE------  
 *      render(API Data)
 *      <HTML> with API Data
 *      componentDidUpdate
*/