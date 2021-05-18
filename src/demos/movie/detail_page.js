import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { Swiper, SwiperSlide } from 'swiper/react'

// Component
import Overlay from '../../components/overlay'
import {Header1} from '../../components/header'
import {Icon} from '../../components/icon'
import {MovieCard} from '../../components/moviecard'
import {CastDetail} from '../movie/castdetail_page'
import VideoPlayer from '../../components/videoplayer'
import Gallery from '../../components/gallery'

// Data
import { API_KEY } from '../../data'

// Function
import { timeConvert, truncateWords } from '../../functions'

// Styles
import 'swiper/swiper.scss';

const photos = [
    {
      src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      width: 4,
      height: 3
    },
    {
      src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80',
      width: 1,
      height: 1
    }
  ];

class MovieDetailPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            MovieLoading: true,
            SimilarLoading: true,
            CreditLoading: true,
            MovieDetail: null,
            SimilarMovies: null,
            MovieCredits: null,
            castId: null,
            videoplayer: false
        }
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({MovieLoading: true, SimilarLoading: true, CreditLoading: true})
            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=videos,images`)
            .then(result => result.json())
            .then(data => this.setState({ MovieDetail: data,MovieLoading: false }))

            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
            .then(result => result.json())
            .then(data => this.setState({SimilarMovies: data.results, SimilarLoading: false}))

            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${API_KEY}`)
            .then(result => result.json())
            .then(data => this.setState({MovieCredits: data, CreditLoading: false}))
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=videos,images`)
		.then(result => result.json())
        .then(data => this.setState({ MovieDetail: data,MovieLoading: false }))
        
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(result => result.json())
        .then(data => this.setState({SimilarMovies: data.results, SimilarLoading: false}))

        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${API_KEY}`)
        .then(result => result.json())
        .then(data => this.setState({MovieCredits: data, CreditLoading: false}))

        const handleEsc = (e) => {if(e.keyCode === 27 && this.state.videoplayer) {this.setState({videoplayer: false, video: null})}}
		window.addEventListener('keydown', handleEsc);
    }

    openCastDetails = (item) => this.setState({castId: item})
    goBack = () => this.setState({castId: null})
    openVideos = (item) => this.setState({video: item.key, videoplayer: true})
    closeVideo = () => this.setState({videoplayer: false, video: null})

    render() {
        const filter_director = this.state.MovieCredits ? this.state.MovieCredits.crew.filter(item => item.department === 'Directing').map(item => item.name) : undefined
        const filter_writer = this.state.MovieCredits ? this.state.MovieCredits.crew.filter(item => item.department === 'Writing').map(item => item.name) : undefined
        return(
            !this.state.MovieLoading && !this.state.SimilarLoading && !this.state.CreditLoading ?
            <div className="position-absolute fixed-top w-100 bg-dark" style={{zIndex: '10'}}>
                {/*Header*/}
                <Header1 />

                {/* Section start */}
                <section className={this.state.videoplayer ? 'detail_hero active' : 'detail_hero'} style={{height: '100vh', background: `url(https://image.tmdb.org/t/p/w1280/${this.state.MovieDetail.backdrop_path})`}}>
                    <Overlay className="fixed-top position-absolute" zIndex="0" bgColor="linear-gradient(to right, #090909, transparent)" />
                    <Overlay className="fixed-bottom position-absolute" zIndex="0" bgColor="linear-gradient(to top, #090909, transparent)" />
                    <div className="video-wrapper">
                        <Icon className="text-large close_btn" icon="material-icons" color="#fff" onClick={this.closeVideo}>close</Icon>
                        <VideoPlayer
                            height="100%"
                            url={`https://www.youtube.com/watch?v=${this.state.video}`} 
                            themecolor="#fff"
                            site="youtube"/>
                    </div>
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row">
                            <div className="col-12 col-lg-6 alt-font">
                                <h2 className="font-weight-500 text-white mb-4">{this.state.MovieDetail.title}</h2>
                                <ul className="tags mb-3">
                                    {this.state.MovieDetail.genres.map((item,i) => <li key={i}>{item.name}</li> )}
                                </ul>
                                <ul className="sub-details mb-2 pl-1">
                                    <li>imdb {this.state.MovieDetail.vote_average}</li>
                                    <li>{timeConvert(this.state.MovieDetail.runtime)}</li>
                                    <li>{this.state.MovieDetail.spoken_languages[0].name}</li>
                                </ul>
                                <p className="mb-0">{truncateWords(this.state.MovieDetail.overview,40)}</p>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10} 
                                    className="videos"
                                    breakpoints={{
										768: {
										  slidesPerView: 4
										},
										991: {
										  slidesPerView: 3,
										},
										1200: {
											slidesPerView: 4,
										},
									  }}>
                                    {
                                        this.state.MovieDetail.videos.results.map((item,i) => {
                                            return <SwiperSlide key={i} onClick={() => this.openVideos(item)}><img src={`http://img.youtube.com/vi/${item.key}/0.jpg`} width="100%" alt={item.name}/></SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section end */}
                {/* Section start */}
                <section className="all_details" style={{background: '#090909'}}>
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row">
                            <div className="col-12 col-lg-6 details_details md-mb-20px">
                                <h4 className="text-white">Details</h4>
                                <p><strong className="font-weight-500 text-white">Director : </strong>{filter_director.slice(0,3).map(item => item+', ')}...</p>
                                <p><strong className="font-weight-500 text-white">Writers : </strong>{filter_writer.slice(0,3).map(item => item+', ')}...</p>
                                <p><strong className="font-weight-500 text-white">Popularity : </strong>{this.state.MovieDetail.popularity}</p>
                                <p><strong className="font-weight-500 text-white">Country : </strong>{this.state.MovieDetail.production_countries[0].name}</p>
                                <p><strong className="font-weight-500 text-white">Language : </strong>{this.state.MovieDetail.spoken_languages[0].name}</p>
                                <p><strong className="font-weight-500 text-white">Release Date : </strong>{new Date(this.state.MovieDetail.release_date).toDateString()}</p>
                            </div>
                            <div className="col-12 col-lg-6 md-mb-20px">
                                <h4 className="text-white pl-2">Cast</h4>
                                <ul className="row details_casts scrollbar size-sm">
                                    {
                                        this.state.castId ?
                                        <div>
                                            <Icon icon="material-icons" onClick={this.goBack}>west</Icon>
                                            <CastDetail castId={this.state.castId} />
                                        </div>
                                        : this.state.MovieCredits.cast.map((item,i) => {
                                            return (
                                                <li className="col-6 col-md-3 col-lg-4 col-xl-3" onClick={() => this.openCastDetails(item.id)} key={i}>
                                                    <div className="profile_img" style={{background: `url(https://image.tmdb.org/t/p/w200${item.profile_path})`, backgroundSize: 'cover',backgroundPosition: 'center top'}}/>
                                                    <h6 className="text-white">{item.name}</h6>
                                                    <span>{item.character}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="text-white">Images</h4>
                                <Gallery photos={photos} />;
                                {/* <Swiper
                                    slidesPerView={2}
                                    spaceBetween={10} 
                                    className="details_images"
                                    breakpoints={{
										768: {
										  slidesPerView: 4
										},
										991: {
										  slidesPerView: 6,
										}
									  }}>
                                    {
                                        this.state.MovieDetail.images.backdrops.map((item,i) => {
                                            return <SwiperSlide key={i}><img src={`https://image.tmdb.org/t/p/w1280${item.file_path}`} width="100%" alt={item.name}/></SwiperSlide>
                                        })
                                    }
                                </Swiper> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section end */}
                {/* Section start */}
                <section className="pt-0" style={{background: '#090909'}}>
                    <div className="container-fluid px-lg-5 px-md-4">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="text-white">Similar Movies</h4>
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={20} 
                                    className="details_similar_movies"
                                    breakpoints={{
                                        768: {
                                          slidesPerView: 3
                                        },
										991: {
										  slidesPerView: 5
										},
										1199: {
										  slidesPerView: 6,
										}
									  }}>
                                    {
                                        this.state.SimilarMovies.map((item,i) => {
                                            return <SwiperSlide key={i}><Link to={`/movie/${item.id}`}><MovieCard className="moviecard-2 rounded" themecolor='#000' data={item} /></Link></SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section end */}
            </div> : <ReactLoading type='bubbles' color='#6900af' height={100} width={100} />
        )
    }
}

export default MovieDetailPage