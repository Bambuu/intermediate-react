import React from 'react';

/**
 * This is a FormController. It takes in two props:
 *
 * initialValues, which is an object, consisting of the initial state the form should have.
 *
 * onSubmit - the function that should be called when the form is submitted.
 * This function is called with the state of the form (e.g. an object consisting of the
 * different input fields)
 *
 * children : The Children of the FormController must be a function, that should
 * render the form.
 *
 * The function will receive an object that is meant to be attached to <input> fields inside the function.
 *
 * To submit the form, render a button inside. This button will submit the form by default.
 *
 */
export class FormController extends React.Component{

	constructor(props){
		super(props);
		
		const initialValues = props.initialValues;
		this.state = {
			...initialValues
		};
	}
	
	onSubmit = (e) => {
		e.preventDefault();
		
		this.props.onSubmit(this.state);
		
		this.setState({
			...this.props.initialValues
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
