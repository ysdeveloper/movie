import React from 'react'

// Components
import Accordion from '../components/accordion'

const Data = [
					{
						'title':'What does royalty free mean?',
						'content':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
					},
					{
						'title':'What do you mean by item and end product?',
						'content':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
					},
					{
						'title': 'What are some examples of permitted end products?',
						'content':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
					},
					{
						'title':'Am i allowed to modify the item that i purchased?',
						'content':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
					}
				]

function AccordionPage(props) {
	return (
		<div className="row">
			<div className="col-12">
				<h2 className="page-title">Accordion</h2>
			</div>
			{/* =================Accordion Style 1=================*/}
			<div className="col-12 py-80px">	
				<div className="component-title">
					<h6 className="title">Accordion Style 1</h6>
				</div>
				<Accordion 
					className="accordion-style-1 alt-font"
					data={Data}
				/>
			</div>

			{/* =================Accordion Style 2=================*/}
			<div className="col-12 py-80px">	
				<div className="component-title">
					<h6 className="title">Accordion Style 2</h6>
				</div>	
				<Accordion 
					className="accordion-style-2 alt-font"
					data={Data}
				/>
			</div>

			{/* =================Accordion Style 2 Rounded=================*/}
			<div className="col-12 py-80px">	
				<div className="component-title">
					<h6 className="title">Accordion Style 2 Rounded</h6>
				</div>	
				<Accordion 
					className="accordion-style-2 rounded alt-font"
					data={Data}
				/>
			</div>	

			{/* =================Accordion Style 3=================*/}
			<div className="col-12 py-80px">	
				<div className="component-title">
					<h6 className="title">Accordion Style 3</h6>
				</div>	
				<Accordion 
					className="accordion-style-3 alt-font"
					data={Data}
				/>
			</div>	

			{/* =================Accordion Style 3 rounded=================*/}
			<div className="col-12 py-80px">	
				<div className="component-title">
					<h6 className="title">Accordion Style 3 Rounded</h6>
				</div>	
				<Accordion 
					className="accordion-style-3 rounded alt-font"
					data={Data}
				/>
			</div>	
		</div>
	);
}

export default AccordionPage