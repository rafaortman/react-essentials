const {render} = ReactDOM

render (
	<h1 id='title' 
		className='header' 
		style={{backgroundColor: 'red', color: 'white', fontFamily: 'Arial'}}>
		Hello World! </h1>,
	document.getElementById('react-container')
)