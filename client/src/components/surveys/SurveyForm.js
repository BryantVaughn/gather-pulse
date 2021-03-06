import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import './styles/SurveyForm.css';

class SurveyForm extends Component {
	renderFields() {
		return formFields.map(({ label, name }) => {
			return (
				<Field
					component={SurveyField}
					type="text"
					label={label}
					name={name}
					key={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red darken-2 btn-flat white-text">
						Cancel
					</Link>
					<button className="btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	formFields.forEach(({ name }) => {
		if (!values[name]) errors[name] = 'You must provide a value';
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
