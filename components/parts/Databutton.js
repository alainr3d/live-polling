import React from 'react';
import ReactDOM from 'react-dom';

var Databutton = React.createClass({
	
	handleClick(){
	    console.log("test click");
	},
	
	render() {
		return (
		    <div style={{width:"30px",height:"30px",backgroundColor:"green"}} onClick={this.handleClick}></div>
	    );
	}
});

export default Databutton;