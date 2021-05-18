import React from 'react'
import ReactLoading from 'react-loading'

// Components
import {MovieCard} from '../components/moviecard'

// Data
import { TRENDING_MOVIE_URL } from '../data'



class MoviecardPage extends React.Component {

	constructor() {
		super()
		this.state = {
			moviedata: null,
			loading: true
		}
	}
	componentDidMount() {
		fetch(TRENDING_MOVIE_URL)
		.then(result => result.json())
		.then(data => this.setState({moviedata: [...data.results],loading: false}))
	}
	render() {
		return (
			!this.state.loading ? 
			<div className="row">
				<div className="col-12 mb-40px">
					<h2 className="page-title">Movie Cards</h2>
				</div>
				{/* =================Movie Card Style 1=================*/}
				<div className="col-7">
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Movie Card 1</h6>
					<MovieCard
						className="moviecard-1"
						data = {this.state.moviedata !== null ? this.state.moviedata[0] : undefined }
					/>
				</div>
				{/* =================Movie Card Style 2=================*/}
				<div className="col-5">
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Movie Card 2</h6>
					<MovieCard 
						className="moviecard-2"
						data={this.state.moviedata[1]}
					/>
				</div>
				{/* =================Movie Card Style 3=================*/}
				<div className="col-4 mt-5">
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Movie Card 3</h6>
					<MovieCard 
						className="moviecard-3"
						data={this.state.moviedata[2]}
					/>
				</div>
			</div> : <ReactLoading type='bubbles' color='#6900af' height={100} width={100} />
		);
	}
}

export default MoviecardPage