import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className="card grey lighten-4" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">
							Sent On: {new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action" style={{ textTransform: 'uppercase' }}>
						<p style={{ color: '#018c2d' }}>Yes: {survey.yes}</p>
						<p style={{ color: '#e55220' }}>No: {survey.no}</p>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div style={{ marginTop: '20px' }}>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
