import React from 'react'

// data
import { MovieData } from '../data'

// Components
import MovieCard from '../components/moviecard'

function MoviecardPage() {

	return (
		<div className="row">
			<div className="col-12 mb-40px">
				<h2 className="page-title">Movie Cards</h2>
			</div>
			{/* =================Movie Card Style 1=================*/}
			<div className="col-7">
				<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Movie Card 1</h6>
				<MovieCard
					className="moviecard-1"
					data = {MovieData[0]}
				/>
			</div>
			{/* =================Movie Card Style 2=================*/}
			<div className="col-5">
				<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Movie Card 2</h6>
				<MovieCard 
					className="moviecard-2"
					data={MovieData[1]}
				/>
			</div>
			{/* =================Movie Card Style 3=================*/}
			<div className="col-4 mt-5">
				<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Movie Card 3</h6>
				<MovieCard 
					className="moviecard-3"
					data={MovieData[2]}
				/>
			</div>
		</div>
	);
}

export default MoviecardPage