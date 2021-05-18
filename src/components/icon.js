import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'

export class Icon extends Component {
	render() {
		const Style = {
			icon: {
				color: this.props.color
			}
		}

		return (
			<NavLink activeClassName="" className={this.props.className ? this.props.className : ''} to={this.props.to ? this.props.to : '#'} onClick={this.props.onClick}>
				{this.props.icon ? <i className={this.props.icon} style={Style.icon}>{this.props.children}</i> : undefined}
				{this.props.icon ? <span className="icon-cover" style={{background: this.props.bgColor}}></span> : undefined}
			</NavLink>
		);
	}
}

export class HamburgerIcon extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
	}

	handleClick = () => {
		return (
			this.setState(prevState => {
				return (
					{
						active: !prevState.active	
					}
				)
			})
		);
	}

	render() {
		const style = {
			hamburgericon: {
				backgroundColor: this.props.bgColor
			}
		}

		return (
			<div className={`${this.props.className} ${this.state.active ? 'active' : ''}`} onClick={this.handleClick}>
				<span style={style.hamburgericon}></span>
				<span style={style.hamburgericon}></span>
				<span style={style.hamburgericon}></span>
			</div>
		);
	}
}