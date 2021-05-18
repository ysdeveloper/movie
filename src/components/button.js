import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			active: false
		}
	}

	handleMouseOver = (e) => {
		if(e.target.classList.contains('btn-style-1')) {
			this.setState({
				active: true
			})
		}
	}

	handleMouseOut = (e) => {
		if(e.target.classList.contains('btn-style-1')) {
			this.setState({
				active: false
			})
		}
	}

	handleClick = (e) => {
		// btn style 4 click function
		if(e.target.classList.contains('btn-style-4')) {
			e.target.classList.remove('animate')
			e.target.classList.add('animate')
			setTimeout(function() {
				e.target.classList.remove('animate')
			},700)
			e.target.querySelector('.button-cover').style.backgroundImage='radial-gradient(circle,'+this.props.bgColor+' 20%,transparent 20%),radial-gradient(circle,'+this.props.bgColor+' 20%,transparent 20%),radial-gradient(circle,'+this.props.bgColor+' 20%,transparent 20%),radial-gradient(circle,transparent 10%, '+this.props.bgColor+' 15%,transparent 20%),radial-gradient(circle,'+this.props.bgColor+' 20%,transparent 20%),radial-gradient(circle,transparent 10%, '+this.props.bgColor+' 15%,transparent 20%),radial-gradient(circle,'+this.props.bgColor+' 20%,transparent 20%),radial-gradient(circle,'+this.props.bgColor+' 20%,transparent 20%)'
		}
		e.persist()
	}

	componentDidMount() {
		const el = ReactDOM.findDOMNode(this)
		const width = el.offsetWidth
		this.setState({
			height: width
		})
	}

	render() {
		const style = {
			button: {
				background: this.props.bgColor,
				borderColor: this.props.bgColor,
				color: this.state.active ? this.props.bgColor : this.props.Color
			},
			button_cover: {
				backgroundColor: this.props.bgColor,
				borderColor: this.props.bgColor,
				color: this.state.active ? this.props.bgColor : this.props.Color,
				height: this.state.height
			}
		}

		return(
			<Link className={this.props.className} style={{...style.button,...this.props.componentStyle}} to={this.props.to ? this.props.to : "button"} onMouseOver={this.handleMouseOver} onMouseLeave= {this.handleMouseOut} onClick={(e) => {this.handleClick(e); this.props.onClick && this.props.onClick()}}>
				{this.props.icon ? <i className={this.props.icon} style={{marginRight: this.props.children ? 10 : 0}} /> : undefined}
				{this.props.children}
				<span className="button-cover" style={style.button_cover}></span>
			</Link>
		);
	}
}

export default Button