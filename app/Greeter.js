import React from 'react'
import config from './config.json';

export default React.createClass({
	render: function() {
		return(
			<div>
				<h2>React is now working in Webpack</h2>
				<h4>{config.greetText}</h4>
			</div>
			);
	}
});


// let config = require('./config.json');

// module.exports = function() {
//   let greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };
