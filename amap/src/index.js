// c'est parti !
import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App'
import StorePicker from './components/StorePicker'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound'


const Root = () => {
	return (
		<Router>
		  <Switch>
		    <Route exact path="/" component={StorePicker}/>
		    <Route path="/store/:storeId" component={App}/>
		    <Route component={NotFound}/>
		  </Switch>
		</Router>
	)
}

render(<Root/>, document.querySelector('#main'));