//Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Get a refrence to the div eith ID root
const el = document.getElementById('root');

//Tell r=React to take controll of that element 
const root = ReactDOM.createRoot(el);

//Show the component on the screen 
root.render(<App />);