const express = require('express');
const cmd = require("node-cmd");
const nodestatic = require('node-static');
const distFolder = new nodestatic.Server('./public');
const app = express();

app.post('/', (req, res) => {
  return res.sendStatus(101);
});

app.get('/test', (req, res) => {
  return res.sendStatus(200);
});

app.get('/testproxy', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/nnn.html', 200, {}, req, res);
            }
        });
});

app.get('/test1', (req, res) => {
  return res.sendStatus(200);
});

app.post('/test2', (req, res) => {
  return res.sendStatus(200);
});

var count = 400

app.get('/count', (req, res) => {
  count++;
  return res.send(`${count}`);
});

app.post('/git', (req, res) => {
  // If event is "push"
  if (req.headers['x-github-event'] == "push") {
  cmd.runSync('chmod 777 git.sh'); /* :/ Fix no perms after updating */
  cmd.runSync('./git.sh', (err, data) => {  // Run our script
    if (data) console.log(data);
    if (err) console.log(err);
  });
  cmd.run('refresh');  // Refresh project

  console.log("> [GIT] Updated with origin/master");
}

  return res.sendStatus(200); // Send back OK status
});

app.get('/git', (req, res) => {
  // If event is "push"

  cmd.runSync('chmod 777 git.sh'); /* :/ Fix no perms after updating */
  cmd.runSync('./git.sh', (err, data) => {  // Run our script
    if (data) console.log(data);
    if (err) console.log(err);
  });
  cmd.run('refresh');  // Refresh project

  console.log("> [GIT] Updated with origin/master");


  return res.sendStatus(200); // Send back OK status
});

module.exports = app;
