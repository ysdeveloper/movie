import React from 'react'

class BlogCard extends React.Component {
	constructor() {
		super()
		this.state = {
			currentItem: null
		}
	}

	handleClick = (item) => {
		this.setState({
			currentItem: item
		})
	}

	render() {
		const Data = this.props.data.map(
			(item,id) => {
				return(
					<a href="/" className='col' key={id} onClick={() => this.handleClick(item)}>
						<div className="card">
							{item.tags ? <button className="tags">{item.tags}</button> : undefined}
							<figure>
								<img className="img" src={require(`../img/${item.img}`)} alt="" height="200" width="100%"/>
							</figure>
							<figcaption>
								<p className="date">{item.date}</p>
								<h3 className="title">{item.title}</h3>
								<p className="content main-font">{item.content.split(' ').slice(0,10).join(' ')+'...'}</p>
								<button className="button">See More</button>
								<div className="sender">
									{item.profile ? <img className="userimg" alt="" src={require(`../img/${item.profile}`)} height="25" width="25" /> : undefined}
									{item.username ? <span className="username" to="">{item.username}</span> : undefined}
								</div>
							</figcaption>
						</div>
					</a>
				);
			}
		);
		return(
			<div className={'row '+this.props.className}>
				{Data}
			</div>
		)
	}
}

export default BlogCard