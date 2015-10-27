import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
	
	propTypes: {
	    title: React.PropTypes.string.isRequired
	},
	
	render() {
		return (
		    <header>
		        <h1>{this.props.title}</h1>
		    </header>
	    );
	}
});

export default Header;