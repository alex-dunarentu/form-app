This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Creating a survey app

The app has one main class component, named Form which contains the logic inside the application. It is joined by the rest of the components named Question and Result that are simple functional components.

### Form Component

A class component used to store the state that contains the form data and renders the form. It also contains the logic of the evaluation which is handled by the method handleSubmit.

### Question Component

Simple functinal component that takes as props a questions title, id and answer as well as a method called handleChange that evaluates your choices and gives you a score based on the answer. It is also responsible for displaying the questions inside our form.

### Result Component

Also a simple functional component that accepts as prop the id of the result and displays it based on an algorithm that takes in account the score. The results are stored in a object inside the file.

##

The goal of application was to practice what i've learned to a point in a react course.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
