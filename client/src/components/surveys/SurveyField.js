import React from 'react';

export default function SurveyField({ input, label }) {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
		</div>
	);
}
