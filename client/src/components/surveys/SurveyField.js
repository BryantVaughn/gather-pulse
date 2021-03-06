import React from 'react';
import './styles/SurveyField.css';

export default function SurveyField({
	input,
	label,
	meta: { error, touched }
}) {
	return (
		<div>
			<label>{label}</label>
			<input className="input-field" {...input} />
			<div className="red-text">{touched && error}</div>
		</div>
	);
}
