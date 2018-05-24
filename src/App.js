import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from './component/Login'
import Dashboard from './component/Dashboard';
import RebrandlyLinks from './component/Link/RebrandlyLinks';
import CreateLink from './component/Link/CreateLink';
import EditLink from './component/Link/EditLink';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter> 
          <Switch> 
            <Route path= "/login" component={Login}/>
             <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
               <Route path= "/dashboard" component={Dashboard}/>
               <Route exact path= "/link" component={RebrandlyLinks}/>
               <Route path ="/link/:id/edit" component={EditLink}/>
               <Route path ="/link/:id/delete" component={DeleteLink}/>
               <Route path="/createlink" component={CreateLink}/>
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>

    );
  }
}

export default App;

