import React from 'react'

// Components
import Gallery from '../components/gallery'
import MovieCard from '../components/moviecard'

// Data
import { GalleryData,MovieData } from '../data'

class GalleryPage extends React.Component {
	render() {
		return(
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
							GalleryData.map((item,index) => {
								return(
									<img key={index} className="card" src={require(`../img/${item}`)} alt={item} />	
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
							MovieData.map((item,index) => {
								return(
									<MovieCard 
										className="moviecard-2 card"
										key={index}
										data={item}
									/>
								);
							})
						}
					</Gallery>
				</div>
			</div>
		);
	}
}

export default GalleryPage