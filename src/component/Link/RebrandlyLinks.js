import React, { Component } from 'react';
import EditLink from '../Link/EditLink';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Header from '../Header';
class RebrandlyLinks extends Component{
	constructor(props){
		super(props);
		this.state={open:false,
			email:'',
			link:[]
		}
	}
	render(){
		return(
			<div>
			<Header/>
			<Table>
			<TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Destination</TableHeaderColumn>
        <TableHeaderColumn>Short URL</TableHeaderColumn>
        <TableHeaderColumn>Actions</TableHeaderColumn>
     
      </TableRow>
    		</TableHeader>
    <TableBody>
    {
    	this.state.link.map(link=>{
    	return(
		    	 <TableRow >
			        <TableHeaderColumn>{link.title}</TableHeaderColumn>
			        <TableHeaderColumn>{link.destination}</TableHeaderColumn>
			        <TableHeaderColumn>{link.shortUrl}</TableHeaderColumn>
		        

		       <TableRowColumn>
		       <IconButton onClick={() => this.props.history.push(`/link/${link.id}/edit`)} >
                    <EditIcon />
                  </IconButton>
                   <IconButton
                 onClick={() => this.deleteLink(link.id)} >
                    <DeleteIcon />
                  </IconButton>
                  </TableRowColumn>
                  </TableRow>
                  )

	}
	)
}
	</TableBody>
	</Table>
			</div>
			);
	}
	componentWillMount()
	{
		fetch('https://api.rebrandly.com/v1/links',
		{
			headers: {
						apikey: sessionStorage.getItem('apikey')
			}
		
	})

		.then(res=>{
			if(res.ok){
				res.json().then(data=>{
					this.setState({
						link:data
					})
				})
			}
			else{
				alert(res.statusText)
			}
		})
	}
	

}			 
export default RebrandlyLinks;