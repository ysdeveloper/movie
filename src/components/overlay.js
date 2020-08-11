import React, {Component} from 'react'

class Overlay extends Component {
	render() {

		const Style = {
			overlay: {
				background: this.props.bgColor,
				position:'absolute',
				width:'100%',
				height: this.props.height ? this.props.height : '100%',
				zIndex: '1',
				opacity: this.props.opacity
			}
		}

		return(
		<div className={this.props.className} style={Style.overlay}></div>
		);
	}
}

export default Overlay