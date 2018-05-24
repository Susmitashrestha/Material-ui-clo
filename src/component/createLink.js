import React,{Component} from 'react';
import Header from './Header';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';


class createLink extends Component{
	alignCenter = {
    height: "100vh",              
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  }
  floatingLabelFocusStyle={
  	color : '#6242f4'
  }
  underlineStyle ={
  borderColor : '#6242f4'
  }

	//constructor(props){
	//	super(props);
	//	this.state{
	//		Title:'',
	//		Destination:'',
	//		ShortUrl:''
	//	}
	//}


	render(){
	  
	return(
		<div>
		<Header/>

		<Card style={this.alignCenter}>
		<CardHeader name="Submission"/>
		<CardText>
		<TextField
			type="title"
			hintText="title"
			floatingLabelText="Enter title"
			floatingLabelFocusStyle={this.floatingLabelFocusStyle}
			underlineFocusStyle={this.underlineStyle}
		/>
		<br/>

		<TextField
			type="Destination"
			hintText="Destination"
			floatingLabelText="Enter destination"
			floatingLabelFocusStyle={this.floatingLabelFocusStyle}
			underlineFocusStyle={this.underlineStyle}
		/>
		<br/>
		<TextField
			type="ShortUrl"
			hintText="ShortUrl"
			floatingLabelText="Enter Url"
			floatingLabelFocusStyle={this.floatingLabelFocusStyle}
			underlineFocusStyle={this.underlineStyle}
		/>
		</CardText>
		</Card>
		</div>
		
	)

}

}
export default createLink;