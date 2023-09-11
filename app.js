const express = require('express');
const app = express();
const port = 9000;

app.get('/api', (req, res) => {
  // Get query parameters
  const { slack_name, track } = req.query;

  // Get the current date and time in UTC
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const currentUtcTime = new Date().toISOString();

  // GitHub repository URL and file URL
  const githubRepoUrl = 'https://github.com/username/repo';
  const githubFileUrl = `${githubRepoUrl}/blob/main/file_name.ext`;

  // Create the response JSON object
  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send the JSON response
  res.json(response);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
