import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is a FormController. It takes in two props:
 * initialState, which is an object, consisting of the initial state the form should have.
 *
 * onSubmit - the function that should be called when the form is submitted.
 * This function is called with the state of the form (e.g. an object consisting of the
 * different input fields)
 *
 * children : The Children of the FormController must be a function, that should
 * render the form.
 * This function will receive an object containing the keys of the initial state,
 * For each key, it will receive the object {value, onChange}
 * These are meant to be attached to <input> elements inside the FormController
 *
 * To submit the form, render a button inside. This button will submit the form by default.
 *

 *
 */
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
