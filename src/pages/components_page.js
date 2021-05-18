import React from 'react'
import { HashRouter ,Route, Switch } from 'react-router-dom'

// Components
import {Searchbar} from '../components/searchbar'
import NavigationLinks from '../components/navigationlinks'

// Pages
import SearchbarPage from './searchbar_page'
import NotFoundPage from './notfound_page'
import AccordionPage from './accordion_page'
import ButtonPage from './button_page'
import BlogcardPage from './blogcard_page'
import HeaderPage from './header_page'
import IconPage from './icon_page'
import MoviecardPage from './moviecard_page'
import GalleryPage from './gallery_page'
import VideoplayerPage from './videoplayer_page'

function ComponentsPage() {
	return (
		<HashRouter>
			<div className="container-fluid">
				<div className="row">
					<div className="col-3 pl-0">
						{/* =================Sidebar Start=================*/}
						<div className="sidebar" style={{'width':260,'height':'100vh','backgroundColor':'#f7f7f7'}}>
							<div className="logo mb-4 mt-3 justify-content-center">
								<img src={require('../img/mix_logo.png')} alt="" height="auto" width="70" />
							</div>
							<Searchbar className="mb-5" placeholder="Search" focusColor="#6900af" />
							<div className="overflow-auto">
								<h5 className="text-medium text-purple font-weight-600">Components</h5>
								<NavigationLinks
									className="ml-4 mb-4"
									activeColor="#6900af"
									links={
										[
											{'title':'Accordion','to':'/components/accordion','icon':'fa fa-bars'},
											{'title':'Buttons','to':'/components/button','icon':'fa fa-link'},
											{'title':'Blog Cards','to':'/components/blogcard','icon':'fa fa-address-card-o'},
											{'title':'Searchbar','to':'/components/searchbar','icon':'fa fa-search'},
											{'title':'Icons','to':'/components/icon','icon':'fa fa-info'},
											{'title':'Movie Cards','to':'/components/moviecard','icon':'fa fa-film'},
											{'title':'Gallery','to':'/components/gallery','icon':'fa fa-image'},
											{'title':'Video Player','to':'/components/videoplayer','icon':'fa fa-play'}
										]
									}
								/>
								<h5 className="text-medium text-purple font-weight-600">Layout</h5>
								<NavigationLinks
									className="ml-4 mb-4"
									activeColor="#6900af"
									links={
										[
											{'title':'Header','to':'/components/header','icon':'fa fa-header'},
											{'title':'Hero','to':'/components/hero','icon':'fa fa-list-alt'},
											{'title':'Pricing','to':'/components/pricing','icon':'fa fa-address-card-o'},
											{'title':'Footer','to':'/components/footer','icon':'fa fa-search'}
										]
									}
								/>
							</div>
						</div>
						{/* =================Sidebar End=================*/}
					</div>
					<div className="col-6 py-5 px-0">
						<Switch>
							<Route path="/components/accordion" exact={true} component={AccordionPage} />
							<Route path="/components/button" component={ButtonPage} />
							<Route path="/components/blogcard" component={BlogcardPage} />
							<Route path="/components/searchbar" component={SearchbarPage} />
							<Route path="/components/header" exact component={HeaderPage} />
							<Route path="/components/icon" exact component={IconPage} />
							<Route path="/components/moviecard" exact component={MoviecardPage} />
							<Route path="/components/gallery" exact component={GalleryPage} />
							<Route path="/components/videoplayer" exact component={VideoplayerPage} />
							<Route path="/components/*" exact component={NotFoundPage} />
						</Switch>
					</div>
					<div className="col-3">
					</div>
				</div>
			</div>
		</HashRouter>
	);
}

export default ComponentsPage