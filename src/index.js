import React    from 'react';
import ReactDOM from 'react-dom';
import   'bulma/css/bulma.css'
import   './Containers/index.css';
import App       from './Components/App';
// import Columns   from './Components/column/Columns';
import Column    from './Components/column/Column';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />    , document.getElementById('root'));
ReactDOM.render(<Column /> , document.getElementById('body'));

registerServiceWorker();

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((fateen) => <li><strong>fateen</strong></li>);
// console.log(doubled);
