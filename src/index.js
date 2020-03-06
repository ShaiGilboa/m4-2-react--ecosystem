import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const rootElement = document.getElementById('root');
const body = document.querySelector('body')
body.style.margin = 0;
rootElement.style.margin = 0;
rootElement.style.padding = 0;
rootElement.style.width = '100vw';
rootElement.style.height = '100vh';

ReactDOM.render(<App />, rootElement);
