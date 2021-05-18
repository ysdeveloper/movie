import React from 'react'

// Component
import {Icon} from './icon'
import Button from './button'

export class Footer1 extends React.Component {
    render() {
        return(
            <footer style={{background: 'linear-gradient(90deg, rgba(19,0,58,1) 0%, rgba(9,9,9,1) 100%)'}}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            <ul className="d-flex flex-wrap justify-content-center list-unstyled mb-5">
                                <li><Icon icon="fa fa-facebook-f" className="icon-style-1 icon-medium mr-4 sm-mr-15px" bgColor="linear-gradient(#002BFF,#000626)"/></li>
                                <li><Icon icon="fa fa-instagram" className="icon-style-1 icon-medium mr-4 sm-mr-15px" bgColor="linear-gradient(#FF0000,#3B002D)"/></li>
                                <li><Icon icon="fa fa-twitter" className="icon-style-1 icon-medium mr-4 sm-mr-15px" bgColor="linear-gradient(#0090FF,#00101D)"/></li>
                                <li><Icon icon="fa fa-pinterest-p" className="icon-style-1 icon-medium mr-4 sm-mr-15px" bgColor="linear-gradient(#FF0000,#200000)"/></li>
                                <li><Icon icon="fa fa-dribbble" className="icon-style-1 icon-medium mr-4 sm-mr-15px" bgColor="linear-gradient(#FF0077,#20000F)" /></li>
                                <li><Icon icon="fa fa-behance" className="icon-style-1 icon-medium" bgColor="linear-gradient(#0044FF,#000923)"/></li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <h5 className="text-white font-weight-600 text-medium text-center mb-4">Receive the latest update</h5>
                            <form className="d-flex justify-content-center mb-3">
                                <input 
                                    className="alt-font mr-2" 
                                    placeholder="Enter your Email" 
                                    style={{color: '#fff', background: '#545454',border: 'none',padding: '5px 15px',borderRadius: '25px',width: 300,fontSize: 14}} />
                                <Button 
                                    className="btn-style-2 rounded btn-medium text-uppercase font-weight-600 letter-spacing-1px" 
                                    bgColor="linear-gradient(to left,#330080,#6600FF,#330080)" 
                                    Color="#fff">submit</Button>
                            </form>
                            <p className="mb-0 alt-font text-small text-center">POWERED BY YsDeveloper</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}