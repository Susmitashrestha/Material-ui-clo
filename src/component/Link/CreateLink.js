import React,{Component} from 'react';
import Header from '../Header';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardTitle, CardText,CardActions} from 'material-ui/Card';


class CreateLink extends Component{
	alignCenter = {
    height: "100vh",              
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  }
  floatingLabelFocusStyle={
  	color : '#642f4'
  }
  underlineStyle ={
  borderColor : '#6242f4'
  }

	constructor(props){
		super(props);
		this.state ={
			title:'',
			destination:''
			
		}
	}


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
			value={this.state.title}
			onChange={(e) => {this.setState({title: e.target.value})}}
		/>
		<br/>

		<TextField
			type="Destination"
			hintText="Destination"
			floatingLabelText="Enter destination"
			floatingLabelFocusStyle={this.floatingLabelFocusStyle}
			underlineFocusStyle={this.underlineStyle}
			value={this.state.destination}
			onChange={(e) =>{this.setState({destination: e.target.value})}}
		/>
		<br/>
		<CardActions>
		<FlatButton backgroundColor = "#6242f4" label="Submit" onClick={() => this.onSubmit()}/>
		</CardActions>
		
		</CardText>
		</Card>
		</div>
		)
}
onSubmit() {
	
	const apikey=sessionStorage.getItem('apikey')

    const data = {
      title: this.state.title,
      destination: this.state.destination
    }
    fetch('https://api.rebrandly.com/v1/links',{
    	method:'POST',
    	headers: {
    		apikey:apikey,
    		'Content-type':'application/json'
    	},
    	body: JSON.stringify(data)
    })
    .then(response=>{
    	if(response.ok){
    		return response.json()
    			.then(data=>{
    				this.props.history.push("/link")
    			})
    	}
    	else
    		alert(response.statusText)
    })

}
}
export default CreateLink;