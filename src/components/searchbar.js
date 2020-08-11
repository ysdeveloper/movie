import React from 'react'
import '../css/app.css'

class Searchbar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			focus: false
		}
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleFocus() {
		this.setState({ focus: true })
	}

	handleBlur() {
		this.setState({ focus: false })
	}

	render() {
		// style
		const style = {
			input: {
				borderColor: this.state.focus ? this.props.focusColor : null
			},
			icon: {
				color: this.state.focus ? this.props.focusColor : '#000'
			},
			border: {
				background: this.props.focusColor
			}
		}

		return (
			<div className={"searchbar "+this.props.className} style={this.props.componentStyle}>
				<input 
					className="alt-font"
					onClick={this.handleFocus}
					onBlur={this.handleBlur}
					placeholder={this.props.placeholder}
					style={style.input}
				/>
				<i 
					className="fa fa-search"
					style={style.icon}>
				</i>
				<div className="searchborder" style={style.border}></div>
			</div>
		);	
	}
}

export default Searchbar