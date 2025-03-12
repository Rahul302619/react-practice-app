
# Getting Started with Create React App

# Install node and by installing node npm by default get installed

# Run this command to create react app [npx create-react-app react-practice-app]

# If  want to use [npm] to create react app than first need to install [create-react-app] and than run [npm create-react-app app-name]

## Interview questions-
 React create its own DOM(virtual DOM) and render the components inside it(for e,g see index.js)
 React function is used for stateless component and class is used for stateful component
 With the help of react hooks we can write stateful component using function as well

# Advantages of Hooks-
 So after hook no need to use class component because class component have some drawback like classes don't minify very well
 Difficult to reuse stateful component logic(with Hooks its easy)
 Data fetching become easy by using useEffect() hook, previously we use componentDidMount and componentDidUpdate
 no need to use lifecycle methods.
 can't use hook inside class.

 # Webpack is use to bundle the project into single file

 # Bable is the modern javascript complier which convert modern javscript into old java script so that browser can understand

 # React dev tool extension -> It have 2 section 
 1) Components - It is use to see the component staructure also for selected component we can check the props and state and which is the parrent component of the selected component
 2) Profiler - It is use to check the time taken by components to load

 # Redux dev tool extension -> It is use to check the Action, state and Diff between state on each and every action performed

# For installing axios and react router use [npm install axios react-router-dom]

# For installing redux and react-redux router use [npm install redux react-redux]

# Use (devtool: 'source-map') inside webpack.config.js file to display sources tab in your browser’s DevTools in JSX format so that it will be easy to debug

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
