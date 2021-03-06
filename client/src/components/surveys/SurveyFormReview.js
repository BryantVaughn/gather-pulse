import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';
import './styles/SurveyFormReview.css';

function SurveyFormReview({ onCancel, formValues, submitSurvey, history }) {
	const reviewFields = formFields.map(({ name, label }) => {
		return (
			<div className="review" key={name}>
				<label className="review-label">{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries:</h5>
			{reviewFields}
			<button className="red darken-2 white-text btn-flat" onClick={onCancel}>
				Back
			</button>
			<button
				className="white-text btn-flat right"
				onClick={() => submitSurvey(formValues, history)}
			>
				Send
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
