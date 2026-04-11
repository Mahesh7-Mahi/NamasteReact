Namste React 🚀

# NOTES:

# Inception & Igniting our App

1. npm repository for All the packages(libraries) -> any package include in our project we have to use npm like(maven) in java-spring boot
2. all the packages hosted in npm
3. package.json is a configuration for npm and it keeps tracks versions of installed packages
4. By using npm we can add dependencies in our peoject
5. There 2 types of dependencies dev and prod
6. ^ (carret) for mainor updates it automatically update the version
7. ~ (tilda) for major updates it automatically update the version
8. package-lock.json maintain exact version of every installed or added dependency in out project
9. due transitiva dependency if we install any dependency all related dependencies added automatically
10. Don't put node_modules in git, so we add that folder in .gitignore
11. to execute our package we have to write npx parcel index.html -> npx commands
12. npm commands used to install packages into our project
13. CDN is not a preffered way to get react into our project
14. Parcel
    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement
    - File watching algorithm - written in c++
    - Caching - Faster Builds
    - Image optimization
    - Minification
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code spliting
    - Differential Bundling - support of older browsers
    - Diagnostics
    - Error Handling
    - HTTPs
    - Tree Shaking - Remove unused code
    - Different dev and prod bundles


# Laying the foundation

1. React.createElement() => JS Object => HTMLElement(render)
2. Jsx is not HTML inside javascript, it is HTML/XML like syntax
3. React => const heading = React.createEliment(
    "h1",{id:"heading"},"I am h1 tag"
)
4. Jsx => const JsxHeading = <h1 id="heading">I am h1 tag</h1>
5. Browsers JS Engine understands ECMAScript not JSX
6. JSX(Transpiled before it reaches the JS Engine) => Parcel(babel) => React.createEliment => React.createElement() => JS Object => HTMLElement(render)
7. JSX => Babels transpiles it to React.createEliment => React.createElement() => JS Object => HTMLElement(render)
8. in JSX class as className class="heading" -> HTML, but in JSX className="heading"
9. in JSX for attributes we use camalecase syntax
10. if want to write JSX in multiple line we have to write paranthesis -> ()
11. class based component(old way) and functional component(new way)
12. React Functional component is just a normal javascript function which returns JSX or ReactElement
13. Component composition -> putting component inside the component
14. JSX can automatically prevents the csrf attacks from hackers

# Talk is Cheep, Show Me the Code

1. Food ordering app design
2. Components
    - Header
        - logo
        - Nav Items
    - Body
        - search
        - RestaurantContainer
            - RestaurantCard
                - img
                - name of restuarant, star rating, cuisine, deleviry time
    - Footer
        - copyright
        - Links
        - Address
        - Contact
3. What is component -> component nothing but normal javascript function that returns piece JSX code
4. props used to pass dynamic data to component -> props nothing but just normal arguments to a function
5. passing props to a component -> just like passing argument to a function
6. we can pass any number of props the javascript wrap to is an Object
7. we can destructuring on the fly props
8. config drivin UI
9. not using keys ( not acceptable), not use index as key, always use unique key

# Let's Get Hooked

1. Two types of export/import
2. Default export/import
3. export default component
4. import component from path
5. named export/import
6. export const component
7. import {Component} from "path";
# React Hooks
8. React Hook is a normal javascript utility functions
    - useState() - used to generate state variables
        - Ex:
            const [listOfRestaurants, setListOfRestaurants] = useState([]); -> Local state variable - Super powerful variable
            const listOfRestaurants; -> Normal JS Variable  
    - useEffect()
9. Whenever state variable updates React rerender the component
10. React works on reconciliation algorithm is also known as react fiber
11. Virtual DOM is an representation of an actual DOM -> representation of virtual DOM nothing but an Javascript Object
12. What is diff algoritham -> finds out the difference between virtual dom and actual dom and finally updated the actual dom if virtual dom changed
13. in react 16 new algorithm cames in react fiber
14. finding out the defference between two HTML document is time taking and fingind out the two objects is faster thats why react always finds out objects defference nothing but DOMs
15. Why React fast -> Because effcient DOM manupulation

# Exploring the World

1. Page Loads -> Make API call -> Render the UI (Not Recomanded)
2. Page Loads -> Render the UI -> Make API call -> Render the UI again( Recomanded)
3. useEffect() -> have two arguments callback function and another is dependency array
4. After body component render completed then useEffect call the call back function
5. Shimmar UI
6. Whenever state variable update, react trigger a reconciliaction cycle(re-render the component)

# Finding the Path

1. useEffect(() => {},[]) Hook having to arguments callback function and dependency array
2. only call back function is mandatory not dependency array in useEffect Hook
3. useEffect if no dependency array => useEffect is called on every render
4. useEffect if empty dependency = [] => useEffect is called on initial render(just once)
5. useEffect if empty dependency [btnName] => useEffect is called everytime btnName is updated
6. Create state variables useState variables at starting of the component and not write in outside the component
7. Don't use useState hook in if or else blocks means inside the conditional statements(if,for, while) and inside the functions
8. useRouteError is also a hook to know error details(like status, StatuSText etc)
8. React application is single page application
9. Routing in Web Apps
    - client side routing
    - server side routing


