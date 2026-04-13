import { useState } from "react";

const User = (props) => {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(2);

    const {name,location} = props
    return (
        <div className="user-card">
            <h2>Functional Component</h2>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Gmail: mahesh@gmail.com</h3>
        </div>
    )
}

export default User;