import React from 'react'
import '../css/app.css'
import ReactLoading from 'react-loading'
import {Link} from 'react-router-dom'

// Components
import { Icon } from './icon'
import {MovieCard} from './moviecard'

// Data
import {SEARCH_URL} from '../data'

export class Searchbar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			focus: false
		}
	}

	handleFocus = () => { this.setState({ focus: true }) }
	handleBlur = () => { this.setState({ focus: false }) }

	render() {
		// style
		const style = {
			input: {
				borderColor: this.state.focus ? this.props.focusColor : this.props.color,
				color: this.state.focus ? this.props.focusColor : this.props.color
			},
			icon: {
				color: this.state.focus ? this.props.focusColor : this.props.color
			},
			border: {
				background: this.props.focusColor
			}
		}

		return (
			<div className={"searchbar "+this.props.className} style={this.props.componentStyle}>
				<input className="alt-font" onClick={this.handleFocus} onBlur={this.handleBlur} onChange={this.props.onChange} placeholder={this.props.placeholder} style={style.input} />
				<i className="fa fa-search" style={style.icon}></i>
				<div className="searchborder" style={style.border}></div>
			</div>
		);	
	}
}

export class PopUpSearchbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pop_up: false,
			loading: false,
			filtered_movie: null
		}
	}

	SearchMovie = (e) => {
		if(e.target.value !== '') {
			this.setState({loading: true})
			fetch(`${SEARCH_URL}&query=${e.target.value}`)
			.then(result => result.json())
			.then(data => this.setState({filtered_movie: [...data.results], loading: false}))
		}
	}

	PopUpSearch = () => {
		this.setState({pop_up: true})
		document.body.classList.add('stop-scrolling')
	}
	
	CloseSearch = () => {
		this.setState({pop_up: false})
		document.body.classList.remove('stop-scrolling')
	}

	componentDidMount() {
		const handleEsc = (e) => {
			if(e.keyCode === 27 && this.state.pop_up) {
				this.setState({pop_up: false})
				document.body.classList.remove('stop-scrolling')
			}
		}
		window.addEventListener('keydown', handleEsc);
	}

	render() {
		return (
			<div>
				<Icon className="text-large" icon="fa fa-search" color="#fff" onClick={this.PopUpSearch} />
				<div className={`pop_up_searchbar ${this.state.pop_up ? 'active' : ''}`}>
					<Icon className="text-large close_btn" icon="material-icons" color="#fff" onClick={this.CloseSearch}>close</Icon>
					<div className="container py-5">
						<div className="row justify-content-center">
							<div className="col-12 col-md-6 mb-4">
								<Searchbar focusColor="#6900af" color="#fff" placeholder="Search" onChange={this.SearchMovie} />
							</div>
							<div className="col-12">
								<div className="row h-85vh scrollbar size-sm">
									{this.state.loading ?
										<ReactLoading type='bubbles' color='#6900af' height={100} width={150} />
										: 
										this.state.filtered_movie ? 
										this.state.filtered_movie.map((item,i) => {
											return (
												<div className="col-6 col-md-4 col-lg-3 mb-3" key={i}>
													<Link to={`/movie/${item.id}`} onClick={document.body.classList.remove('stop-scrolling')}><MovieCard className="moviecard-1 rounded" data={item} /></Link>
												</div>	
											)
										}) : undefined
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}