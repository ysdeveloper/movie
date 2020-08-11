import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DemoPage extends Component {
	render() {
		return(
			<ul>
				<li><Link to='/movie_home_1'>Movie Home page</Link></li>
			</ul>
		)
	}
}

export default DemoPage