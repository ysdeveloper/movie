import React from 'react'
import ReactLoading from 'react-loading'

// Components
import Gallery from '../components/gallery'

// Data
import { UNSPLASH_API_KEY } from '../data'

class GalleryPage extends React.Component {

	constructor() {
		super()
		this.state = {
			Images: null,
			Loading: true
		}
	}

	componentDidMount() {
		fetch(`https://api.unsplash.com/search/photos?query=nature&orientation=squarish&per_page=20&client_id=${UNSPLASH_API_KEY}`)
		.then(result => result.json())
		.then(data => this.setState({Images: [...data.results], Loading: false}))
	}
	
	render() {
		return(
			!this.state.Loading ?
			<div className="row">
				<div className="col-12">
					<h2 className="page-title">Gallery</h2>
				</div>
				{/* =================Default Gallery=================*/}
				<div className="col-12 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Default Gallery</h6>
					</div>
					<Gallery>
						{
							this.state.Images.slice(0,10).map((item,index) => {
								return(
									<img key={index} className="card" src={item.urls.small} alt='Photos' />	
								);
							})
						}
					</Gallery>
				</div>
				{/* =================Gallery 1=================*/}
				<div className="col-12 py-20px">	
					<div>
						<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Gallery 1</h6>
					</div>
					<Gallery className="gallery-1">
						{
							this.state.Images.slice(6,15).map((item,index) => {
								return(
									<img key={index} className="card" src={item.urls.small} alt='Photos' />	
								);
							})
						}
					</Gallery>
				</div>
			</div> : <ReactLoading type='bubbles' color='#6900af' height={100} width={100} />
		);
	}
}

export default GalleryPage