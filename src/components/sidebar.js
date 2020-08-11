import React from 'react'

// Components
import Searchbar from './searchbar'
import NavigationLinks from './navigationlinks'

// css
import '../css/app.css'

function Sidebar(props) {
	// Component Style
	const style = {
		sidebar: {
			backgroundColor: props.bgColor,
			width: props.width,
			height: props.height
		}
	}

	return (
		<div className={"sidebar "+props.className} style={style.sidebar}>

			{props.children ? props.children : 
				<React.Fragment>
					<div className="logo mb-4">
						<img src={require('../img/logo.png')} alt="" height="50" width="50" />
						<h6 className="title alt-font">ysdeveloper</h6>
					</div>
					<Searchbar className="mb-4" placeholder="Search" focusColor="rgb(107, 82, 174)" />
					<NavigationLinks links={props.links} />
				</React.Fragment>
			}
			
		</div>
	);
}

export default Sidebar