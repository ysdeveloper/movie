import React from 'react'
import ReactDOM from 'react-dom'

class Accordion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			height: 0,
			uid: 0,
			change: 0,
			active: true
		}
	}

	// Title Click Event Handle function
	handleClick = (value,index) => {
		return (
			this.setState( prevState => {
				return (
					{
						uid: index,
						change: prevState.uid
					}
				);
			}),
			this.setState(prevState =>{
				return ({
					active: prevState.uid === prevState.change ? !this.state.active : true
				});
			})
		);
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.accordion-content').scrollHeight;
			this.setState({
				height
			});
		}, 1000);
	}

	render() {
		// Extra styling
		const style = {
			accordionTitle: {
				backgroundColor: this.props.bgColor,
				borderColor: this.props.borderColor,
				color: this.props.Color
			}
		}

		// Mapping of props(data)
		const Data = this.props.data.map(
			(item,i) => {
				return (
					<div key={i.toString()} className={(this.state.uid === i && this.state.active) ? 'body show' : 'body'}>
						<button className="accordion-title" style={style.accordionTitle} onClick={() => this.handleClick(item,i)}>{item.title}</button>
						<div className="accordion-content" style={{height: (this.state.uid === i && this.state.active) ? this.state.height : 0}}>
							<p className="main-font">{item.content}</p>
						</div>
					</div>
				);
			}
		);

		return (
			<div className={"accordion "+ this.props.className}>
				{Data}
			</div>
		);
	};
}

export default Accordion