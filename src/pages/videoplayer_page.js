import React from 'react'

// Components
import VideoPlayer from '../components/videoplayer'

class VideoplayerPage extends React.Component {
	render() {
		return (
			<VideoPlayer title="Avengers End Game" url="avengers-end-game.mov" themecolor="#fff" thumbnail="avatar01.jpg" />
		);
	}
}

export default VideoplayerPage