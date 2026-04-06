Namste React 🚀

NOTES:
    *Inception & Igniting our App*
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
