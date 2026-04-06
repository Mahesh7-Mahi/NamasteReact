import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="title">
        React using JSX 🚀
    </h1>
);

const number = 10000;
const HeadingComponent = () => (
    <div className="container">
        <h2>{number}</h2>
         <Title/>
         <Title></Title>
         {Title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

console.log(HeadingComponent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)