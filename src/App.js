import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import './css/app.css'

// Pages
import HomePage from './pages/home_page'
import ComponentsPage from './pages/components_page'
import DemoPage from './pages/demo_page'
import MovieHomePage from './demos/movie/home_page'

class App extends Component {
	
	render() {
		const style = {
			active: {
				color: "rgb(107, 82, 174)",
				background: "rgba(107, 82, 174,0.1)",
			}
		}

		return (
		  	<BrowserRouter>
	  			<header>
		  			<nav className="d-flex navbar-expand-lg">
			  			<ul className="menu ml-auto">
				  			<li className="list-item">
				  				<NavLink to="/" activeStyle={style.active} exact>Home</NavLink>
				  				<ul className="sub-menu">
				  					<li className="list-item">Home</li>
				  					<li className="list-item">About</li>
				  					<li className="list-item">Contact Us</li>
				  				</ul>
				  			</li>
				  			<li className="list-item">
				  				<NavLink to="/demo" activeStyle={style.active}>Demos</NavLink>
				  			</li>
				  			<li className="list-item">
				  				<NavLink to="/components" activeStyle={style.active}>Components</NavLink>
				  			</li>
				  			<li className="list-item">
				  				<NavLink to="/documentation" activeStyle={style.active}>Documentation</NavLink>
				  			</li>
			  			</ul>
		  			</nav>
	  			</header>
	  			<Switch>
	  				<Route path="/" component={HomePage} exact />
	  				<Route path="/demo" component={DemoPage} />
	  				<Route path="/components" component={ComponentsPage} />
	  				<Route path="/movie_home_1" component={MovieHomePage} />
	  			</Switch>
		  	</BrowserRouter>
	    );
	}
}

export default App;