module.exports = ({ sender, body }) => {
	return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>${sender} would like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${body}</p>
          <div>
            <a href="http://localhost:3000">Yes</a>
            <a href="http://localhost:3000">No</a>
          </div>
          <p>Powered by GatherPulse</p>
        </div>
      </body>
    </html>
  `;
};
