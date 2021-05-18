import React from 'react'

// Components
import Button from '../components/button'

class ButtonPage extends React.Component {

	// Click function
	handleClick = () => {
		console.log('its working')
	}

	render() {
			return(
			<div className="row">
				<div className="col-12">
					<h2 className="page-title">Buttons</h2>
				</div>
				{/* =================Button Sizes=================*/}
				<div className="col-12 py-80px">	
					<div className="component-title">
						<h6 className="title">Button Sizes</h6>
					</div>
					<div className="row justify-content-center align-items-center">
						<div className="col-auto px-1">
							<Button className="btn-extra-small" bgColor="#6900af" Color="#fff">btn-extra-small</Button>
						</div>
						<div className="col-auto px-1">
							<Button className="btn-small" bgColor="#6900af" Color="#fff">btn-small</Button>
						</div>
						<div className="col-auto px-1">
							<Button className="btn-medium" bgColor="#6900af" Color="#fff">btn-medium</Button>
						</div>
						<div className="col-auto px-1">
							<Button className="btn-large" bgColor="#6900af" Color="#fff">btn-large</Button>
						</div>
						<div className="col-auto px-1">
							<Button className="btn-extra-large" bgColor="#6900af" Color="#fff">btn-extra-large</Button>
						</div>
					</div>
				</div>
				{/* =================Button 1=================*/}
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 1</h6>
					</div>
					<Button className="btn-style-1 btn-medium" bgColor="#0b0c10" Color="#fff">Btn-style-1</Button>
				</div>	
				{/* =================Button 1 Rounded=================*/}
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 1 Rounded</h6>
					</div>
					<Button className="btn-style-1 rounded btn-medium" bgColor="#ff8882" Color="#fff" componentStyle={{boxShadow: '0 5px 20px rgba(0,0,0,0.1)'}}>Btn-style-1</Button>
				</div>	
				{/* =================Button 2=================*/}
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 2</h6>
					</div>
					<Button className="btn-style-2 btn-medium" bgColor="linear-gradient(to left,#c4e538,#009432,#c4e538)" Color="#fff">Btn-style-2</Button>
				</div>	
				{/* =================Button 2 Rounded=================*/}
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 2 Rounded</h6>
					</div>
					<Button className="btn-style-2 rounded btn-medium" bgColor="linear-gradient(to left,#fda7df,#9980fa,#fda7df)" Color="#fff">Btn-style-2</Button>
				</div>	
				{/* =================Button 3=================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 3</h6>
					</div>
					<Button className="btn-style-3 btn-medium" bgColor="#6900af" Color="#fff" onClick={this.handleClick}>Btn-style-3</Button>
				</div>	
				{/* =================Button 3 Rounded=================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 3 Rounded</h6>
					</div>
					<Button className="btn-style-3 btn-medium rounded" bgColor="#3887fe" Color="#fff">Btn-style-3</Button>
				</div>	
				{/* =================Button 4=================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 4</h6>
					</div>
					<Button className="btn-style-4 btn-medium" bgColor="#6900af" Color="#fff">Click me</Button>
				</div>	
				{/* =================Button 4 Rounded=================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 4 Rounded</h6>
					</div>
					<Button className="btn-style-4 rounded btn-medium" bgColor="#ff0081" Color="#fff">Click me</Button>
				</div>	
				{/* =================Button 5 top =================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 5 top</h6>
					</div>
					<Button className="btn-style-5 top btn-medium" bgColor="#6900af" Color="#6900af">Button 5 top</Button>
				</div>	
				{/* =================Button 5 bottom =================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button 5 Bottom</h6>
					</div>
					<Button className="btn-style-5 bottom btn-medium" bgColor="#f9a63b" Color="#f9a63b">Button 5 bottom</Button>
				</div>
				{/* =================Button with icon =================*/}	
				<div className="col-4 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Button with icon</h6>
					</div>
					<Button className="btn-style-4 btn-medium rounded" bgColor="#6900af" Color="#fff" icon="fa fa-glass">Button</Button>
				</div>	
				{/* ================= Links =================*/}	
					<div className="col-4 py-20px">	
						<div>
							<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>link 1</h6>
						</div>
						<Button className="link-style-1" icon="fa fa-glass" bgColor="#6900af" Color="#6900af">Link</Button>
					</div>		
			</div>
		);
	}
}

export default ButtonPage