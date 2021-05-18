import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {TweenMax} from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import AOS from 'aos';
import ReactLoading from 'react-loading'

// Components
import { Header1 } from '../../components/header'
import { Footer1 } from '../../components/footer'
import {MovieCard, MovieList} from '../../components/moviecard'
import VideoPlayer from '../../components/videoplayer'

// Data
import { MovieTypes,TRENDING_MOVIE_URL, TRENDING_SERIES_URL, SEARCH_URL,API_KEY, GENRES_URL} from '../../data'

// Styles
import '../../css/movie_pages.css'
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'aos/dist/aos.css';

SwiperCore.use([EffectCoverflow]);

class MovieHomePage extends Component {
	constructor() {
		super()
		this.moviecards = []
		this.state = {
			type: 'movie',
			tag: 28,
			genres: null,
			filtered_movie: null,
			trendingmovies: null,
			trendingseries: null,
			kungfupandaseries: null,
			ironmanseries: null,
			site: 'youtube',
			trailer_key: '1d0Zf9sXlHk',
			loading: true
		}
	}

	// Movie List tags click function
	handleTagsClick = (item) => {
		if(this.state.tag !== item.id) {
			this.setState({tag: item.id,loading: true})
			fetch(`https://api.themoviedb.org/3/discover/${this.state.type}?api_key=${API_KEY}&with_genres=${item.id}`)
			.then(result => result.json())
			.then(data => this.setState({filtered_movie: data.results.slice(0,8), loading: false}))
		}
	}

	// Movie List type click function
	handleTypeClick = (item) => {
		if(this.state.type !== item.toLowerCase()) {
			this.setState({type: item.toLowerCase(), loading: true})
			fetch(`https://api.themoviedb.org/3/discover/${item.toLowerCase()}?api_key=${API_KEY}&with_genres=${this.state.tag}`)
			.then(result => result.json())
			.then(data => this.setState({filtered_movie: data.results.slice(0,8), loading: false}))
		}
	}

	// Swiper Function Start
	onSlideChange = (swiper) => {
		var activeSlide = swiper.slides[swiper.realIndex] ;
		TweenMax.to('.hero',1, {css: {background: activeSlide.getAttribute('data-bg')}})
	}
	// Swiper Function End

	onMovieClick = (e,item) => {
		fetch(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&append_to_response=videos`)
		.then(result => result.json())
		.then(data => data.videos.results.length ? this.setState({trailer_key:  data.videos.results[0].key}) : this.setState({trailer_key: '1d0Zf9sXlHk'}))

		document.querySelectorAll('.media').forEach(function (item) {
			item.classList.remove('active')
		})
		e.currentTarget.classList.add('active')
	}

	componentDidMount() {
		fetch(TRENDING_MOVIE_URL)
		.then(result => result.json())
		.then(data => this.setState({trendingmovies: [...data.results]}))

		fetch(TRENDING_SERIES_URL)
		.then(result => result.json())
		.then(data => this.setState({trendingseries: [...data.results]}))

		fetch(`${SEARCH_URL}&query=kung+fu+panda`)
		.then(result => result.json())
		.then(data => this.setState({kungfupandaseries: [...data.results]}))

		fetch(`${SEARCH_URL}&query=iron+man`)
		.then(result => result.json())
		.then(data => this.setState({ironmanseries: [...data.results]}))

		fetch(GENRES_URL)
		.then(result => result.json())
		.then(data => this.setState({genres: [...data.genres]}))

		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`)
		.then(result => result.json())
		.then(data => this.setState({filtered_movie: data.results.slice(0,8), loading: false}))
	}

	render() {
		AOS.init()
		// STYLE
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
			<div className="position-absolute fixed-top w-100 bg-dark" style={{zIndex: '10'}}>
				{/* SECTION START */}
				<section className="hero" style={{background: 'linear-gradient(#2C013A,#AA014C)'}}>
					{/* Swiper slider Circle Bg */}
					<div className="big-circle"></div>
					<div className="small-circle"></div>

					{/*Header*/}
					<Header1 />
					<Swiper
						slidesPerView={1}
						onSlideChange={this.onSlideChange}>
						<SwiperSlide className="d-flex justify-content-center align-items-end spider-man" data-bg="linear-gradient(#2C013A,#AA014C)">
							<img className="charecter-img" src={require('../../img/spiderman_01.png')} alt="" width="500" height="auto" />
							<h2 className="title1">spider</h2>
							<h2 className="title2">man</h2>
							<span className="subtitle">homecoming</span>
						</SwiperSlide>
						<SwiperSlide className="d-flex justify-content-center align-items-end john-wick" data-bg="linear-gradient(#0075A5,#0B091D)">
							<img className="charecter-img" src={require('../../img/john_wick_01.png')} alt="" width="500" height="auto" />
							<h2 className="title1" style={{left: '39%'}}>john</h2>
							<h2 className="title2">wick</h2>
							<span className="subtitle">chapter 3</span>
						</SwiperSlide>
						<SwiperSlide className="d-flex justify-content-center align-items-end black-panther" data-bg="linear-gradient(#06172F,#000000)">
							<img className="charecter-img" src={require('../../img/black_panther_01.png')} alt="" width="600" height="auto" />
							<h2 className="title1" style={{left: '37%'}}>Black</h2>
							<h2 className="title2" style={{left: '67%'}}>panther</h2>
							<span className="subtitle">chapter 3</span>
						</SwiperSlide>
					</Swiper>
				</section>
				{/* SECTION END */}

				{/* SECTION START */}
				<section className="movie-list" style={{background: 'linear-gradient(90deg, rgba(19,0,58,1) 0%, rgba(9,9,9,1) 100%)' }}>
					<div className="bg_circle"></div>
					<div className="bg_circle" style={{top: '55%', left: '68%', opacity: 0.01}}></div>
					<div className="container-fluid px-xl-5">
						<div className="row">
							<div className="col-12 mb-5 d-flex align-items-center justify-content-center" data-aos="fade-in" data-aos-delay="50" data-aos-once="true">
								<ul className="list d-flex list-unstyled">
									{MovieTypes.map((item,i) => {
											return(
												<li className="list-item mr-5" key={i}>
													<button 
														className='text-white text-medium text-capitalize font-weight-600 bg-transparent letter-spacing-1px px-4 py-1 border-0' 
														style={this.state.type === item.toLowerCase() ? Style.active : undefined} 
														onClick={() => this.handleTypeClick(item)}>
														{item}
													</button>
												</li>
											);
										})
									}
								</ul>
							</div>
							<div className="col-3 col-lg-2 d-sm-block d-none" data-aos="fade-in" data-aos-delay="60" data-aos-once="true">
								<h2 className="text-large font-weight-600 text-white letter-spacing-1px mb-4">Categories</h2>
								<ul className="list list-unstyled m-0 scrollbar size-sm" style={{height: 400}}>
									{this.state.genres ?
										this.state.genres.map((item,i) => {
											return (
												<li className="list-item mb-1" key={i}>
													<button
														className="text-medium text-white text-capitalize letter-spacing-1px bg-transparent border-0 pl-3 pr-3 py-1 no-outline text-left" 
														style={this.state.tag === item.id ? Style.active : undefined} 
														onClick={() => this.handleTagsClick(item)}>{item.name}
													</button>
												</li>
											);
										}) : undefined
									}
								</ul>	
							</div>
							<div className="col-xl-8 col-lg-10 col-sm-9 col-12 d-flex flex-wrap sm-px-1 px-0" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
								{this.state.loading ?
									<ReactLoading type='bubbles' color='#6900af' height={100} width={150} />
									: 
									this.state.filtered_movie.map((item,i) => {
										return <div ref={div => this.moviecards[i] = div} className="col-6 col-sm-4 col-lg-3 mb-3" key={i}><Link to={`/movie/${item.id}`}><MovieCard className="moviecard-1 rounded" data={item} /></Link></div>
									})
								}
							</div>
						</div>
					</div>
				</section>				
				{/* SECTION END */}	

				{/* SECTION START */}
				<section className="lg-py-0px" style={{background: 'linear-gradient(90deg, rgba(19,0,58,1) 0%, rgba(9,9,9,1) 100%)'}}>
					<div className="container-fluid px-xl-5">
						<div className="row justify-content-center">
							<h5 className="col-12 col-lg-10 col-xl-8 text-white mb-4 font-weight-500" data-aos="fade-in" data-aos-duration="1000">Trailers & Videos</h5>
							<div className="col-12 col-lg-10 col-xl-8">
								<div className="row justify-content-center">
									<div className="col-12 col-sm-8 mb-3 sm-mb-0" data-aos="fade-in" data-aos-duration="1000">
										<VideoPlayer 
											height="320px"
											url={`https://www.youtube.com/watch?v=${this.state.trailer_key}`} 
											themecolor="#fff"
											site="youtube"/>
									</div>
									<div className="col-12 col-sm-4 scrollbar size-sm" style={{height: 315}} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true" >
										{this.state.trendingmovies ? this.state.trendingmovies.map((item,i) => <MovieList key={i} data={item} onClick={(e) => this.onMovieClick(e,item)}/>) : undefined}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* SECTION END */}

				{/* SECTION START */}
				<section style={{background: 'linear-gradient(90deg, rgba(19,0,58,1) 0%, rgba(9,9,9,1) 100%)'}}>
					<div className="container-fluid px-5 sm-px-0px">
					<div className="row mb-5 justify-content-end overflow-hidden position-relative" data-aos="fade-in" data-aos-once="true" style={{background: 'linear-gradient(to right, #16070a, #010101)', borderRadius:'20px', backgroundSize: 'cover'}}>
							<img
								style={{position: 'absolute',left:-60,top:'50%',transform: 'translateY(-50%)'}} 
								src={require('../../img/iron_man_statue.png')} alt="iron-man" width="700" className="d-none d-sm-block" />
							<div className="col-12 py-4 sm-px-15px" data-aos="fade-in" data-aos-once="true">
								<Swiper
									effect="coverflow"
									slidesPerView={2}
									spaceBetween={25}
									centeredSlides={false}
									coverflowEffect={{rotate: 0, depth: 100,slideShadows: false}}
									breakpoints={{
										768: {
										  slidesPerView: 3,
										  centeredSlides: true
										},
										991: {
										  slidesPerView: 4,
										},
										1200: {
											slidesPerView: 6,
										},
									  }}
									>
									{this.state.ironmanseries !== null ? 
										this.state.ironmanseries.map((item,i) => {
											return <SwiperSlide key={i}><Link to={`/movie/${item.id}`}><MovieCard className="moviecard-2 rounded" themecolor='#150709' data={item} /></Link></SwiperSlide>
										}) : undefined
									}
								</Swiper>
							</div>
						</div>
						<h5 className="text-white mb-3 sm-px-15px font-weight-500" data-aos="fade-in" data-aos-once="true">Trending Movies</h5>
						<div className="row mb-5 sm-px-25px" data-aos="fade-in" data-aos-once="true">
							<Swiper
								slidesPerView={2}
								slidesPerGroup={2}
								spaceBetween={15}
								centeredSlides={false}
								breakpoints= {{
									768: {
										slidesPerView: 3,
										slidesPerGroup: 3,
										spaceBetween: 30
									},
									991: {
										slidesPerView: 4,
										slidesPerGroup: 4
									},
									1200: {
										slidesPerView: 6,
										slidesPerGroup: 6
									},
								}}
								>
								{this.state.trendingmovies !== null ? 
									this.state.trendingmovies.map((item,i) => {
										return <SwiperSlide key={i}><Link to={`/movie/${item.id}`}><MovieCard className="moviecard-2 rounded" themecolor='#13003a' data={item} /></Link></SwiperSlide>
									}) : undefined
								}
							</Swiper>
						</div>
						<div className="row mb-5 justify-content-end overflow-hidden position-relative" data-aos="fade-in" data-aos-once="true" style={{background: 'linear-gradient(to right, #00b606, #00c195)', borderRadius:'20px', backgroundSize: 'cover'}}>
							<img 
								style={{position: 'absolute',left:0,top:'50%',transform: 'translateY(-50%)'}}
								src={require(`../../img/kung-fu-panda-statue.png`)} alt="kung-fu panda Series" width="600" className="d-none d-sm-block" />
							<div className="col-12 py-4 sm-px-15px">
								<Swiper
									effect="coverflow"
									slidesPerView={2}
									spaceBetween={25}
									centeredSlides={false}
									coverflowEffect={{rotate: 0, depth: 100,slideShadows: false}}
									breakpoints= {{
										768: {
											slidesPerView: 3,
											slidesPerGroup: 3,
											centeredSlides: true
										},
										991: {
											slidesPerView: 4,
											slidesPerGroup: 4
										},
										1200: {
											slidesPerView: 6,
											slidesPerGroup: 6
										},
									}}
									>
									{this.state.kungfupandaseries !== null ? 
										this.state.kungfupandaseries.map((item,i) => {
											return (
												<SwiperSlide key={i}><Link to={`/movie/${item.id}`}>
													<MovieCard className="moviecard-2 rounded" themecolor='#000' data={item} />
													</Link>
												</SwiperSlide>
											);
										})
										: undefined
									}
								</Swiper>
							</div>
						</div>
						<h5 className="text-white mb-3 font-weight-500 sm-px-15px">Trending Tv-Series</h5>
						<div className="row mb-5 sm-px-25px">
							<Swiper
								effect="coverflow"
								slidesPerView={2}
								slidesPerGroup={2}
								spaceBetween={15}
								centeredSlides={false}
								coverflowEffect={{rotate: 0, depth: 10, slideShadows: false}}
								breakpoints= {{
									768: {
										slidesPerView: 3,
										slidesPerGroup: 3,
										spaceBetween: 30
									},
									991: {
										slidesPerView: 4,
										slidesPerGroup: 4
									},
									1200: {
										slidesPerView: 6,
										slidesPerGroup: 6
									},
								}}
								>
								{this.state.trendingseries !== null ? 
									this.state.trendingseries.map((item,i) => {
										return (
											<SwiperSlide key={i}><Link to={`/movie/${item.id}`}>
												<MovieCard className="moviecard-2 rounded" themecolor='#13003a' data={item} />
												</Link>
											</SwiperSlide>
										);
									})
									: undefined
								}
							</Swiper>
						</div>
					</div>
				</section>
				{/* SECTION END */}
				{/* FOOTER START */}
				<Footer1 />
				{/* FOOTER END */}
			</div>
		)
	}
}

export default MovieHomePage