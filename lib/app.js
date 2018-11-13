import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

// import '../scss/app.scss';

window.setTimeout(() => {
    ReactDOM.render(
        <Main />,
        document.getElementById('root')
    );
}, 200);

/* Webpack Dev Server Hot Module Replacement */
// if (module.hot) {
//     module.hot.accept();
// }

// __webpack_public_path__ = 'http://localhost:9000/' // eslint-disable-line