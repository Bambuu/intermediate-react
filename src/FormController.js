import React from 'react';

export class FormController extends React.Component{
	
	static propTypes = {
		initialState: PropTypes.object.isRequired,
		children: PropTypes.func.isRequired,
	};
	
	constructor(props){
		super(props);
		
		const initialState = props.initialState;
		this.state = {
			...initialState
		};
	}
	
	render(){
		for (const [key, value] of Object.entries(this.state)){
			props[key] = {
				value: value,
				onChange: (e) => this.setState({
					[value]: e.target.value,
				})
			}
		}
		
		
		this.children(props);
	}
}
