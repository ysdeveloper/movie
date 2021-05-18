export const BlogData = [
	{
		'title':'Jumanji : Next level',
		'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
		'date':'7th March 2020',
		'img':'blog-image-02.jpg',
		'tags':'Review',
		'username':'Diogo Brandao',
		'profile':'avatar01.jpg'
	},
	{
		'title':'Fashion',
		'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
		'date':'31st July 2013',
		'img':'blog-image-03.jpg',
		'username':'Helena Lopes',
		'profile':'avatar02.jpg'
	},
	{
		'title':'Fashion',
		'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
		'date':'15th May 2019',
		'img':'blog-image-04.jpg',
		'tags':'fashion',
		'username':'Nicolas Horn',
		'profile':'avatar03.jpg'
	}
]

export const MovieTypes = ['Movie','Tv']

// UNSPLASH APIS
const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API

// TMDB APIS
const API_KEY = process.env.REACT_APP_TMDB_API

const API_IMG_URL = `https://image.tmdb.org/t/p/w500/`

const TRENDING_MOVIE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

const TRENDING_SERIES_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`

const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

export { API_KEY, API_IMG_URL, TRENDING_MOVIE_URL, TRENDING_SERIES_URL, SEARCH_URL, GENRES_URL, UNSPLASH_API_KEY }