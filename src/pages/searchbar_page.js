import React from 'react'

// Components
import {Searchbar} from '../components/searchbar'

function SearchbarPage() {
	return(
		<div className="row">
			<div className="col-12 mb-40px">
				<h2 className="page-title">Searchbar</h2>
			</div>
			{/* =================Searchbar=================*/}
			<div className="col-4 py-40px">
				<div>
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Searchbar</h6>
				</div>
				<Searchbar
					focusColor="#6900af"
					placeholder="Search"
				/>
			</div>
			{/* =================Searchbar Square=================*/}
			<div className="col-4 py-40px">
				<div>
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Searchbar Square</h6>
				</div>
				<Searchbar
					className="square"
					focusColor="#46d7ac"
					placeholder="Search"
				/>
			</div>
			{/* =================Searchbar Rounded=================*/}
			<div className="col-4 py-40px">
				<div>
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Searchbar Rounded</h6>
				</div>
				<Searchbar
					className="rounded"
					focusColor="#ed5e86"
					placeholder="Search"
				/>
			</div>
			{/* =================Searchbar Style 1=================*/}
			<div className="col-4 py-40px">
				<div>
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Searchbar Style 1</h6>
				</div>
				<Searchbar
					className="searchbar-style-1"
					focusColor="#ed5e86"
					placeholder="Search"
				/>
			</div>
			{/* =================Searchbar rounded bg =================*/}
			<div className="col-4 py-40px">
				<div>
					<h6 className="title" style={{color: "#6900af", marginBottom: 10}}>Searchbar Rounded bg</h6>
				</div>
				<Searchbar
					className="rounded"
					background="#f7f7f7"
					focusColor="#ed5e86"
					placeholder="Search"
				/>
			</div>
		</div>		
	);
}

export default SearchbarPage