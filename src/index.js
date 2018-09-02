import React from 'react';
import ReactDOM from 'react-dom';
import './Containers/index.css';
import App from './Components/App';
import Columns from './Components/column/Columns';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />   , document.getElementById('root'));
ReactDOM.render(<Columns />, document.getElementById('body'));

registerServiceWorker();

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((fateen) => <li><strong>fateen</strong></li>);
// console.log(doubled);
