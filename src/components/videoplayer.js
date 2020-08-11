import React from 'react'
import ReactPlayer from 'react-player'
import Slider from '@material-ui/core/Slider'
import screenfull from 'screenfull'

// Components
import Overlay from './overlay'

// Format Function
const format = (seconds) => {
	if(isNaN(seconds)) {
		return '00:00'
	}

	const date = new Date(seconds*1000)
	const hh = date.getUTCHours()
	const mm = date.getUTCMinutes()
	const ss = date.getUTCSeconds().toString().padStart(2,"0")

	if(hh) {
		return `${hh}:${mm.toString().padStart(2,"0")}:${ss}`
	}

	return `${mm}:${ss}`
}

class VideoPlayer extends React.Component {
	constructor(props) {
		super(props)
		this.forward = React.createRef()
		this.backward = React.createRef()
		this.videowrapper = React.createRef()
		this.player = React.createRef()
		this.state = {
			muted: false,
			volumeLevel: 50,
			playing: true,
			fullscreen: false,
			controls: this.props.thumbnail ? false : true,
			played: 0
		}
	}

	handleVideoClick = () => {
		this.setState({
			controls: true
		})
	}

	handleVolumeClick = () => {
		this.setState({
			muted: !this.state.muted
		})
	}

	handleVolumeChange = (e,value) => {
		this.setState({
			volumeLevel: value
		})

		if(this.state.volumeLevel === 0) {
			this.setState({
				muted: true
			})
		}else {
			this.setState({
				muted: false
			})
		}
	}

	handlePlay = () => {
		this.setState({
			playing: !this.state.playing
		})
	}

	handleBackward = () => {
		this.player.current.seekTo(this.player.current.getCurrentTime() - 10)
		this.backward.current.classList.add('fadeInOut')
		setTimeout(() => {
			this.backward.current.classList.remove('fadeInOut')
		},400)
	}

	handleForward = () => {
		this.player.current.seekTo(this.player.current.getCurrentTime() + 10)
		this.forward.current.classList.add('fadeInOut')
		setTimeout(() => {
			this.forward.current.classList.remove('fadeInOut')
		},400)
	}

	toggleFullScreen = () => {
		screenfull.toggle(this.videowrapper.current)
		if (screenfull.isEnabled) {
		    screenfull.on('change', () => {
		        this.setState({
		        	fullscreen: screenfull.isFullscreen ? true : false,
		        	controls: screenfull.isFullscreen ? false : true
		        })
		    });
		}
	}

	handleMouseMove = () => {
		if(screenfull.isFullscreen) {
			this.setState({
				controls: true
			})
			setTimeout(() => {
				this.setState({
					controls: false
				})
			},5000)
		}
	}

	handleVideoProgress = (value) => {
		this.setState({
			played: value.played
		})
	}

	handleSeekChange = (e,value) => {
		this.setState({
			played: parseFloat(value/100)
		})
		this.player.current.seekTo(value/100)
	}

	render() {

		const Style = {
			seekbar: {
				color: this.props.themecolor
			},
			icons: {
				color: this.props.themecolor,
				cursor: 'pointer'
			}
		}

		const currentTime = this.player.current ? this.player.current.getCurrentTime() : "00:00"
		const duration = this.player.current ? this.player.current.getDuration() : "00:00"

		const elapsedTime = format(currentTime)
		const totalDuration = format(duration)

		return (
			<div ref={this.videowrapper} className="videoplayer-wrapper">
				<ReactPlayer 
					ref={this.player}
					className="videoplayer"
					url={[
					    {src: require(`../videos/${this.props.url}`), type: 'video/mp4'}
					  ]}
					light={this.props.thumbnail ? require(`../img/${this.props.thumbnail}`) : false }
					playing={this.state.playing}
					width="100%"
					height="100%"
					volume={this.state.volumeLevel/100}
					muted={this.state.muted}
					loop
					onClick={this.handleVideoClick}
					onProgress={this.handleVideoProgress}
					onMouseMove = {this.handleMouseMove} />
				{(this.state.controls) ?
					(<div className="controls align-items-center">
							{this.props.overlay ? 
								<Overlay bgColor={this.props.overlay} 
										 height={this.props.overlayHeight ? this.props.overlayHeight : '100%'} 
										 opacity={this.props.overlayOpacity ? this.props.overlayOpacity : '0.5'} /> 
								: undefined
							}
							<div className="uppercontrols">
								<h5 className="title">{this.props.title}</h5>
							</div>
							<div className="middlecontrols w-50 d-flex justify-content-between">
								<span ref={this.backward} className="rewind">-10</span>
								<span ref={this.forward} className="forward">+10</span>
							</div>
							<div className="lowercontrols text-center w-75">
								<div className="d-flex justify-content-between">
									<div className="volume-controller d-flex">
										<i className="material-icons mr-2 text-white" onClick={this.handleVolumeClick} style={Style.icons}>{this.state.muted ? 'volume_off' : 'volume_up'}</i>
										<Slider 
											className="volume-seekbar w-70px" 
											style={Style.seekbar} 
											aria-label="custom thumb label" 
											defaultValue={20}
											value={this.state.muted ? 0 : this.state.volumeLevel}
											onChange={this.handleVolumeChange} />
									</div>
									<div className="icons text-center d-flex align-items-center">
										<i className="material-icons mr-4" style={Style.icons} onClick={this.handleBackward}>replay_10</i>
										<i className="material-icons mr-4" style={Style.icons} aria-hidden="true" onClick={this.handlePlay}>{this.state.playing ? 'pause' : 'play_arrow'}</i>
										<i className="material-icons" style={Style.icons} onClick={this.handleForward}>forward_10</i>
									</div>
									<i className="material-icons text-white" onClick={this.toggleFullScreen} style={Style.icons}>{this.state.fullscreen ? 'fullscreen_exit' : 'crop_free'}</i>
								</div>	
								<div className="seekbar-wrapper">
									<Slider 
										className="seekbar" 
										style={Style.seekbar} 
										aria-label="custom thumb label" 
										min={0} 
										max={100} 
										value={this.state.played*100}
										onChange={this.handleSeekChange} />
									<p className="videoplayer-timer text-extra-small text-white">{`${elapsedTime}/${totalDuration}`}</p>
								</div>
							</div>
						</div>) : undefined
				}
			</div>
		);
	}
}

export default VideoPlayer