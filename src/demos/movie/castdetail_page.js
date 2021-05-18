import React from 'react'
import ReactLoading from 'react-loading'

// data
import {API_KEY} from '../../data'

export class CastDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            cast: null
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(`https://api.themoviedb.org/3/person/${this.props.castId}?api_key=${API_KEY}&language=en-US`)
        .then(result => result.json())
        .then(data => this.setState({cast: data,loading: false}))
    }

    render() {
        return (
            this.state.loading ?
            <ReactLoading type='bubbles' color='#6900af' height={100} width={100} />
            : 
            <li className="cast_details text-left">
                <div className="d-flex align-items-center mb-3">
                    <div className="profile_img col-auto" style={{background: `url(https://image.tmdb.org/t/p/w200${this.state.cast.profile_path})`, backgroundSize: 'cover',backgroundPosition: 'center top'}}/>
                    <div className="px-3">
                        <h4 className="text-white">{this.state.cast.name}</h4>
                        <h6>Birth Date: {this.state.cast.birthday}</h6>    
                    </div>
                </div>
                <p>{this.state.cast.biography}</p>    
            </li>
        ) 
    }
}