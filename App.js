/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser understands)
 */

// const heading = React.createElement("h1",{
//     id:"heading",xyz:"abc"
// },"Hello World React")

//console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ])
    ]
)

//JSX

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)


