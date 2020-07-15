import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

function SurveyFormReview({ onCancel, formValues, submitSurvey }) {
	const reviewFields = formFields.map(({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={onCancel}
			>
				Back
				<i className="material-icons left">arrow_back</i>
			</button>
			<button
				className="green white-text btn-flat right"
				onClick={() => submitSurvey(formValues)}
			>
				Send
				<i className="material-icons left">email</i>
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
