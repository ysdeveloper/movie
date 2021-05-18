import React, { Component } from 'react'
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './css/app.css'

// Pages
import MovieHomePage from './demos/movie/home_page'
import MovieDetailPage from './demos/movie/detail_page'

class App extends Component {
	
	render() {
		const style = {
			active: {
				color: "rgb(107, 82, 174)",
				background: "rgba(107, 82, 174,0.1)",
			}
		}

		return (
		  	<HashRouter>
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
				  				<NavLink to="/components" activeStyle={style.active}>Components</NavLink>
				  			</li>
				  			<li className="list-item">
				  				<NavLink to="/documentation" activeStyle={style.active}>Documentation</NavLink>
				  			</li>
			  			</ul>
		  			</nav>
	  			</header>
				<AnimatePresence exitBeforeEnter>
					<Switch>
						<Route exact path ="/" component={MovieHomePage} />
						<Route exact path="/movie/:id" component={MovieDetailPage} />
					</Switch>
				</AnimatePresence>
		  	</HashRouter>
	    );
	}
}

export default App;