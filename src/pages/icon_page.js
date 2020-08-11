import React,{ Component } from 'react'

// Components
import { HamburgerIcon } from '../components/icon'

class IconPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-12">
					<h2 className="page-title">Icons</h2>
				</div>
				<div className="col-12 py-80px">	
					<div className="row">
						{/* =================Hamburger Icon 1=================*/}
						<div className="col-4 py-20px">	
							<div>
								<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Hamburger Icon 1</h6>
							</div>
							<HamburgerIcon className="hamburger-style-1" bgColor="#000" />
						</div>	
					</div>
				</div>
			</div>
		);
	} 
}

export default IconPage