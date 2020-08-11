import React from 'react'

class Gallery extends React.Component {
	render() {
		return (
			<div className={'card-columns '+this.props.className}>
				{this.props.children}
			</div>
		);
	}
}

export default Gallery