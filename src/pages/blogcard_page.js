import React from 'react'

// Data
import { BlogData } from '../data'

// Components
import BlogCard from '../components/blogcard'

class BlogcardPage extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-12 mb-40px">
					<h2 className="page-title">Blog Cards</h2>
				</div>
			{/* =================Blog Card Style 1=================*/}
				<div className="col-12 py-40px">
					<div className="component-title">
						<h6 className="title">Blog Card Style 1</h6>
					</div>
					<BlogCard
						className="blogcard-1 row-cols-3 pt-80px"
						data={BlogData}
						to="/newpage"
					/>
				</div>

			{/* =================Blog Card Style 2=================*/}
				<div className="col-12 py-40px">
					<div className="component-title">
						<h6 className="title">Blog Card Style 2</h6>
					</div>
					<BlogCard
						className="blogcard-2 row-cols-3 pt-50px"
						data={BlogData}
					/>
				</div>

			{/* =================Blog Card Style 3=================*/}
				<div className="col-12 py-40px">
					<div className="component-title">
						<h6 className="title">Blog Card Style 3</h6>
					</div>
					<BlogCard
						className="blogcard-3 row-cols-3 pt-50px"
						data={BlogData}
					/>
				</div>	

			{/* =================Blog Card Style 4=================*/}
				<div className="col-12 py-40px mt-50px">
					<div className="component-title">
						<h6 className="title">Blog Card Style 4</h6>
					</div>
					<BlogCard
						className="blogcard-4 row-cols-3 pt-50px"
						data={BlogData}
					/>
				</div>		
			</div>
		)
	}
}

export default BlogcardPage