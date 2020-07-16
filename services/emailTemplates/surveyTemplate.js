const { redirectDomain } = require('../../config/keys');

module.exports = ({ sender, body, id }) => {
	return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>${sender} would like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${body}</p>
          <div>
            <a href="${redirectDomain}/api/surveys/${id}/yes">Yes</a>
          </div>
          <div>
            <a href="${redirectDomain}/api/surveys/${id}/no">No</a>
          </div>
          <p>Powered by GatherPulse</p>
        </div>
      </body>
    </html>
  `;
};
