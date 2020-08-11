import React from 'react'
import { NavLink } from 'react-router-dom'


function NavigationLinks(props) {

	// Component All Links Data
	const LinksData = props.links

	const style = {
		activeStyle: {
			color:props.activeColor
		},
		titleColor: {
			color:props.color,
			textAlign: 'center'
		}
	}

	// Mapping
	const Links = LinksData.map(
		function(link,i) {
			return (
				<li key={i.toString()} className="list-item">
					<NavLink to={link.to ? link.to : '/'} activeStyle={style.activeStyle} onClick={props.onClick}>
						{link.icon ? <i className={link.icon} style={style.titleColor}></i>:''}
						<span style={style.titleColor}>{link.title}</span>
					</NavLink>
				</li>
			);
		}
	)

	return (
		<ul className={"list "+props.className}>
			{Links}
		</ul>
	);
}

export default NavigationLinks