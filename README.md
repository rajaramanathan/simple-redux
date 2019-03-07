As redux is a very simple and tiny framework, one way to understand it better would be to build our own.
simple-redux is a fully functional implementation of the redux functionality with a demo usage in a basic calculator app. 

## simple-redux.js
A fully functional implementation of the redux's 3 main features - createStore, bindActionCreators and connect. 
### 1. createStore
#### store
  Maintains the state. 
#### dispatch
  Changes the state using the reducer and action provided. 
#### subscriber
  Listen for state changes. 
### 2. bindActionCreators
  Basically a helper function to create the map of props to dispatch functions. 
### 3. connect
  Brings everything together using the React JS pattern of provider/consumer and Container/Presentational component. 

## StoreDemo.js
Building a basic calculator app using just the createStore of simple-redux library. The state to props and dispatch to props are created manually. 

## ConnectDemo.js
Essentially building the basic calculator using all the 3 features of the simple-redux library. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


