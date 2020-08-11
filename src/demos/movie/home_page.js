import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

// Components
import { HamburgerIcon } from '../../components/icon'
import Overlay from '../../components/overlay'
import Button from '../../components/button'
import MovieCard from '../../components/moviecard'
import Gallery from '../../components/gallery'
import VideoPlayer from '../../components/videoplayer'

// Data
import { MovieData } from '../../data'

// Styles
import '../../css/movie_pages.css'

// Swiper function
const params = {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '1',
	coverflowEffect: {
		rotate: 0,
		stretch: -700,
		depth: 1000,
		modifier: 1,
		slideShadows: false
	}
}

class MovieHomePage extends Component {
	constructor() {
		super()
		this.state = {
			type: 'movie',
			tag: 'action'
		}
	}

	// Movie List tags click function
	handleTagsClick = (item,i) => {
		return (
			this.setState({
				tag: item
			})
		);
	}

	// Movie List type click function
	handleTypeClick = (item,i) => {
		return (
			this.setState({
				type: item
			})
		);
	}

	render() {
		// getting tags data from the movie data
		const tagsdata = MovieData.map(item => item.tags)

		// combine multiple tags array in one array
		let i = 0,tot_tags = [];
		for(i=0; i < tagsdata.length; i++) {
			tot_tags = tot_tags.concat(tagsdata[i])
		}

		const edit_tags = tot_tags.map(item => item.toLowerCase())

		// Remove the duplicate item from the tags array list
		// FINAL TAG DATA
		const filtered_tags = edit_tags.filter((item,i,self) => i === self.indexOf(item)).sort()

		// FINAL TYPE DATA
		const filtered_type = MovieData.map(item => item.type.toLowerCase()).filter((item,i,self) => i === self.indexOf(item))

		// FILTERED MOVIEDATA (TAGS & TYPE WISE)
		const filtered_moviedata_1 = MovieData.filter(item => item.type.toLowerCase().includes(this.state.type))
		const filtered_moviedata_2 = filtered_moviedata_1.filter(item => item.tags.includes(this.state.tag))

		const Style = {
			active: {
				background: 'linear-gradient(#6900af,#330080)',
				borderRadius: 24,
				boxShadow: '0 10px 35px rgba(0,0,0,0.5)',
				border: 0,
				fontWeight: 700
			}
		}

		return (
			<div className="position-absolute fixed-top z-index-10 w-100 bg-dark">
				{/* SECTION START */}
				<section className="hero" style={{'background': 'linear-gradient(#2C013A,#AA014C)'}}>
					{/*Header*/}
					<header className="d-flex align-items-center justify-content-between px-4 py-2 position-absolute fixed-top w-100">
						<div className="logo d-flex align-items-center">
							<NavLink to="/">
								<img src={require('../../img/logo.png')} height="40" width="40" alt="logo" />
							</NavLink>
						</div>
						<div className="links">
							<HamburgerIcon className="hamburger-style-1" bgColor="#f7f7f7" />
						</div>
					</header>
					
					{/* Swiper */}
					<Swiper {...params} className="slider">
						<div>
							{/* <img className="position-absolute fixed-bottom z-index-10" src={require('../../img/spiderman.png')} alt="" width="500" height="auto" /> */}
						</div>
						<div data-bg={{'background': 'linear-gradient(#0075A5,#0B091D)' }}>
							<img className="position-absolute fixed-bottom z-index-10" src={require('../../img/john_wick.png')} alt="" width="500" height="auto" />
						</div>
						<div data-bg={{'background': 'linear-gradient(#06172F,#000000)' }}>
							<img className="position-absolute fixed-bottom z-index-10" src={require('../../img/black_panther.png')} alt="" width="500" height="auto" />
						</div>
					</Swiper>
				</section>
				{/* SECTION END */}

				{/* SECTION START */}
				<section className="movie-latest" style={{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(31,0,0,1) 51%, rgba(0,0,0,1) 100%)'}}>
					<Overlay className="fixed-top" bgColor="linear-gradient(#000,#000,transparent)" opacity="1" height="200px" />
					<Overlay className="fixed-bottom" bgColor="linear-gradient(transparent,#000)" opacity="1" height="150px" />
					<div className="container">
						<div className="row align-items-center">
							<div className="col-6">
								<div className="title mb-3">
									<h2>Avengers</h2>
									<p>end game</p>
								</div>
								<p className="text-white opacity-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								<Button className="btn-style-2 btn-medium rounded" bgColor="linear-gradient(to left,rgba(255,0,0,1) 0%,transparent 50%,transparent 66%,rgba(255,0,0,1) 100%)" Color="#fff" icon="fa fa-play">Watch Demo</Button>
							</div>
							<div className="col-6">
								<img className="opacity-4" alt="ironman" src={require('../../img/iron-man.png')} />
							</div>
						</div>
					</div>
				</section>
				{/* SECTION END */}

				{/* SECTION START */}
				<section className="movie-list" style={{background: 'linear-gradient(90deg, rgba(19,0,58,1) 0%, rgba(9,9,9,1) 100%)'}}>
					<Overlay className="fixed-top" height="120px" bgColor="linear-gradient(#000,transparent)" />
					<div className="container-fluid py-5">
						<div className="row">

							<div className="col-12 mb-5 d-flex align-items-center justify-content-center">
								<ul className="list d-flex list-unstyled">
									{
										filtered_type.map((item,i) => {
											return(
												<li className="list-item mr-5" key={i.toString()}>
													<button className='text-white text-medium text-capitalize font-weight-600 bg-transparent letter-spacing-1px px-4 py-1 border-0' style={this.state.type === item ? Style.active : undefined} onClick={() => this.handleTypeClick(item,i)}>{item}</button>
												</li>
											);
										})
									}
								</ul>
							</div>

							<div className="col-2">
								<h2 className="text-large font-weight-700 text-white letter-spacing-1px mb-4">Categories</h2>
								<ul className="list list-unstyled m-0">
									{
										filtered_tags.map((item,i) => {
											return (
												<li className="list-item mb-1" key={i.toString()}>
													<button className="text-medium text-white text-capitalize letter-spacing-1px bg-transparent border-0 pl-4 pr-5 py-1 no-outline" style={this.state.tag === item ? Style.active : undefined} onClick={() => this.handleTagsClick(item,i)}>{item}</button>
												</li>
											);
										})
									}
								</ul>
							</div>

							<div className="col-8">
								<Gallery className="gallery-1">
									{
										filtered_moviedata_2.map((item,i) => {
											return(
												<MovieCard 
													key={i}
													className="moviecard-1 card"
													data={item}
												/>
											);
										})
									}
								</Gallery>
							</div>

						</div>
					</div>
				</section>				
				{/* SECTION END */}	

				{/* SECTION START */}
				<section style={{background: 'linear-gradient(90deg, rgba(19,0,58,1) 0%, rgba(9,9,9,1) 100%)'}}>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-9">
								<div className="row">
									<div className="col-8">
										// video Player Will come Here
									</div>
									<div className="col-4 overflow-auto hide-scrollbar" style={{height: 250}}>
										{
											MovieData.map((item,i) => {
												return(
													<div key={i} className="media mb-3">
													  <img className="mr-3 rounded box-shadow-light" src={require(`../../img/${item.img}`)} alt={item.title1} height="50" width="50" />
													  <div className="media-body">
													    <h5 className="mt-0 text-white text-medium">{`${item.title1} ${item.title2}`}</h5>
													    
													  </div>
													</div>
												);
											})
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* SECTION END */}
			</div>	
		)
	}
}

export default MovieHomePage