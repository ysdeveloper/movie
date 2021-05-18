import React from 'react'

const Overlay = (props) => {
	const Style = {
		overlay: {
			background: props.bgColor,
			position:'absolute',
			width: props.width ? props.width : '100%',
			height: props.height ? props.height : '100%',
			zIndex: props.zIndex ? props.zIndex : '1',
			opacity: props.opacity
		}
	}

	return <div className={props.className} style={Style.overlay}></div>
}

export default Overlay