import React from 'react';
import ReactDOM from 'react-dom';
import Header from './parts/Header';
import Databutton from './parts/Databutton';

var APP = React.createClass({
	
	componentWillMount(){
		//start app component
		console.log("start app");
	},
	
	render() {
		return (
		    <div>
		        <Header title="This is a header react component" />
		        <Databutton />
		        <p>created using react,es6</p>
		    </div>
	    );
	}
});

export default APP;