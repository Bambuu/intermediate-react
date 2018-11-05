import React from 'react';
import PropTypes from 'prop-types';

export class FormController extends React.Component{
	
	static propTypes = {
		initialState: PropTypes.object.isRequired,
		onSubmit: PropTypes.func.isRequired,
		children: PropTypes.func.isRequired,
	};
	
	constructor(props){
		super(props);
		
		const initialState = props.initialState;
		this.state = {
			...initialState
		};
	}
	
	onSubmit = (e) => {
		e.preventDefault();
		
		this.props.onSubmit(this.state);
		
		this.setState({
			...this.props.initialState
		});
	};
	
	render(){
		const propsToPassDown = {};
		
		for (const [key, value] of Object.entries(this.state)){
			propsToPassDown[key] = {
				value: value,
				onChange: (e) => {
					this.setState({
						[key]: e.target.value,
					})
				}
			}
		}
		
		return <form onSubmit={this.onSubmit}>
			{this.props.children(propsToPassDown)}
		</form>
	}
}
