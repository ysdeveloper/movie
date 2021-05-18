import React,{Component} from 'react'

// Data
import { API_IMG_URL, API_KEY } from '../data'

// Functions
import { timeConvert } from '../functions'

export class MovieCard extends Component {

	constructor(props) {
		super(props)
		this.posterimage = React.createRef()
		this.state = {
			genres: null,
			length: null,
		}
	}

	componentDidMount = () => {
		fetch(`https://api.themoviedb.org/3/movie/${this.props.data.id}?api_key=${API_KEY}`)
		.then(result => result.json())
		.then(data => {
				this.setState({ 
						genres: data.genres ? data.genres.slice(0,2) : undefined,
						length: data.runtime ? data.runtime : undefined
					})
			})
	}

	render() {
		
		const Style = { 
			figcaption: {
				background: 'linear-gradient(transparent 0%,'+ this.props.themecolor +')'
			},
			genre: {
				background: this.props.themecolor
			}
		}

		const date = new Date(this.props.data.release_date ? this.props.data.release_date : this.props.data.first_air_date).toDateString()
		const genre = this.state.genres ? this.state.genres.map(item => <li key={item.id} style={Style.genre}>{item.name}</li>) : undefined

		return (
			<div className={this.props.className}>
				<figure>
					<img ref={this.posterimage} className="img" src={this.props.data.poster_path ? `${API_IMG_URL}${this.props.data.poster_path}` : require(`../img/img_placeholder.jpg`)} alt={this.props.data.title ? this.props.data.title : this.props.data.name} width="100%" />
					<img className="cover-img" src={`${API_IMG_URL}${this.props.data.poster_path}`} alt={this.props.data.title ? this.props.data.title : this.props.data.name} width="100%"/>
				</figure>
				<figcaption style={Style.figcaption}>
					<h3 className="title">{this.props.data.title ? this.props.data.title : this.props.data.name}</h3>
					<ul className="tags d-flex list-unstyled flex-wrap">{genre}</ul>
					<div className="details">
						<p className="length">{timeConvert(this.state.length)}</p>
						<p className="release_date">{date}</p>
					</div>
					<ul className="buttons list-unstyled">
						<li>
							<i className="fa fa-play"/>
							<span>watch trailer</span>	
						</li>
						<li>
							<i className="fa fa-plus" />
							<span>add to wishlist</span>	
						</li>
					</ul>
				</figcaption>
			</div>
		);
	}
}

export class MovieList extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			genres: null,
		}
	}

	componentDidMount = () => {
		fetch(`https://api.themoviedb.org/3/movie/${this.props.data.id}?api_key=${API_KEY}`)
		.then(result => result.json())
		.then(data => {
				this.setState({ 
						genres: data.genres ? data.genres[0] : undefined,
					})
			})
	}

	render() {
		const date = new Date(this.props.data.release_date ? this.props.data.release_date : this.props.data.first_air_date).toDateString()
		return (
			<div className="media mb-3 clickeffect p-2 rounded" onClick={this.props.onClick}>
				<img className="mr-3 rounded" src={ this.props.data.poster_path ? `https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}` : require(`../img/img_placeholder.jpg`)} alt={this.props.data.title} width="50" style={{boxShadow: '0 7px 15px rgba(0,0,0,0.7)'}} />
				<div className="media-body">
					<h5 className="my-0 text-white text-medium">{this.props.data.title}</h5>
					<span className="text-small font-weight-400 text-capitalize mr-1">{this.state.genres ? `${this.state.genres.name}, ${date}` : date}</span>
				</div>
			</div>
		)
	}
}