import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'

// Components
import Searchbar from '../components/searchbar'
import Button from '../components/button'

class HeaderPage extends Component {
	render() {
		return(
			<div className="row">
				<div className="col-12">
					<h2 className="page-title">Header</h2>
				</div>
				{/* =================Header Style 1=================*/}
				<div className="col-12 py-80px">
					<div className="component-title">
						<h6 className="title">Header Layout 1</h6>
					</div>
					
					{/* Header start */}
					<header className="bg-light d-flex align-items-center justify-content-between px-4 py-2 box-shadow-light">
						<div className="logo d-flex align-items-center">
							<NavLink to="/">
								<img src={require('../img/logo.png')} alt="" height="40" width="40" />
							</NavLink>
						</div>
						<div className="links">
							<ul className="menu">
								<li className="list-item">
									<NavLink to="/" className="p-0" activeClassName="active">Home</NavLink>
									<ul className="sub-menu">
										<li>
											<NavLink to="/">Item 1</NavLink>
										</li>
										<li>
											<NavLink to="/">Item 2</NavLink>
										</li>
										<li>
											<NavLink to="/">Item 3</NavLink>
										</li>
									</ul>
								</li>
								<li className="list-item">
									<NavLink to="/" className="p-0" activeClassName="active">Demos</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/" className="p-0" activeClassName="active">Components</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/" className="p-0" activeClassName="active">Documentation</NavLink>
								</li>
							</ul>
						</div>
						<Searchbar componentStyle={{width: 100}} placeholder="Search" focusColor="#6900af"/>
					</header>
					{/* Header end */}
				</div>

				{/* =================Header Style 2=================*/}
				<div className="col-12 py-80px">
					<div className="component-title">
						<h6 className="title">Header Layout 2</h6>
					</div>

					{/* Header start */}
					<header className="header2 d-flex align-items-center justify-content-between px-4 py-2" style={{'background':'#000'}}>
						<div className="logo d-flex align-items-center">
							<NavLink to="/">
								<img src={require('../img/logo.png')} alt="" height="40" width="40" />
							</NavLink>
						</div>
						<div className="links d-flex">
							<ul className="menu">
								<li className="list-item">
									<Button className="link-style-1 p-0" bgColor="#fff" Color="#fff">Home</Button>
								</li>
								<li className="list-item">
									<Button className="link-style-1 p-0" bgColor="#fff" Color="#fff">Demos</Button>
								</li>
								<li className="list-item">
									<Button className="link-style-1 p-0" bgColor="#fff" Color="#fff">Components</Button>
								</li>
								<li className="list-item">
									<Button className="link-style-1 p-0" bgColor="#fff" Color="#fff">Documentation</Button>
								</li>
							</ul>
						</div>
					</header>
					{/* Header end */}
				</div>

				{/* =================Header Style 3=================*/}
				<div className="col-12 py-80px">
					<div className="component-title">
						<h6 className="title">Header Layout 3</h6>
					</div>

					{/* Header start */}
					<header className="header3 px-4 py-2 box-shadow-light" style={{'background':'#120136'}}>
						<div className="logo d-flex align-items-center justify-content-center mb-2">
							<NavLink to="/">
								<img src={require('../img/logo.png')} alt="" height="40" width="40" />
							</NavLink>
						</div>
						<div className="links d-flex justify-content-center">
							<ul className="menu">
								<li className="list-item">
									<Button className="link-style-1" icon="fa fa-home" bgColor="#fff" Color="#fff">Home</Button>
								</li>
								<li className="list-item">
									<Button className="link-style-1" icon="fa fa-laptop" bgColor="#fff" Color="#fff">Demos</Button>
								</li>
								<li className="list-item">
									<Button className="link-style-1" icon="fa fa-credit-card" bgColor="#fff" Color="#fff">Components</Button>
								</li>
								<li className="list-item">
									<Button className="link-style-1" icon="fa fa-file-text-o" bgColor="#fff" Color="#fff">Documentation</Button>
								</li>
							</ul>
						</div>
					</header>
					{/* Header end */}
				</div>	
						
			</div>
		)
	}
}

export default HeaderPage