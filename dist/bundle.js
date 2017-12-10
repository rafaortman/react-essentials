'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: 'red', color: 'white', fontFamily: 'Roboto' } },
	'Hello World '
), document.getElementById('react-container'));
