import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

function HomePage() {

	const container = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.1 } }
	}

	const item = {
		hidden: { opacity: 0, y: -100 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	}

	return(
		<section>
			<div className="container">
				<motion.div 
				variants={container}
				initial="hidden" 
				animate="show"
				exit="hidden"
				className="row">
					<motion.div variants={item} className="col-4 demo">
						<Link to='/movie'>
							<img className="demo_img" src={require('../img/movie_demo.jpg')} alt="Movie demo"/>
							<strong>Movie</strong>
						</Link>	
					</motion.div>
					<motion.div variants={item} className="col-4 demo">
						<Link to='/project_management'>
							<img className="demo_img" src={require('../img/project_management_demo.jpg')} alt="Project Management demo"/>
							<strong>Project Management</strong>
						</Link>	
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default HomePage