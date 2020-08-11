import React,{Component} from 'react'

class MovieCard extends Component {
	render() {

		return (
			<div className={this.props.className}>
				<figure>
					<img className="img" src={require(`../img/${this.props.data.img}`)} alt="" width="100%"/>
					<img className="cover-img" src={require(`../img/${this.props.data.img}`)} alt="" width="100%"/>
				</figure>
				<figcaption>
					<h3 className="title">{this.props.data.title1}</h3>
					<p className="sub-title">{this.props.data.title2}</p>
					<ul className="tags d-flex list-unstyled flex-wrap">
						{
							this.props.data.tags.slice(0,2).map((tag,index) => {
								return (
									<li key={index}>{tag}</li>
								)
							})
						}
					</ul>
					<div className="details">
						<p className="length">{this.props.data.length}</p>
						<p className="release_date">{this.props.data.year}</p>
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

export default MovieCard