import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composant = () => {
  return <h1 className="final">Hello World 2!</h1>
}

const h1 = <h1 className='salut'> Hello World!!!</h1>

const reactElement = React.createElement('h1', {className:'my-class'}, 'Hello World!')
console.log(reactElement);
// webpack transforme en objet javascript 
// const reactElement = {
//   type: 'h1',
//   props: {
//     className: 'my-class',
//     children: 'Hello World!'
//   }
// }

const tree = React.createElement('div', {className:'my-div'}, reactElement)



root.render(
  tree
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
