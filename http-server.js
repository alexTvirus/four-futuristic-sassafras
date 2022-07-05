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

app.get('/sw.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy1.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw-proxy.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy-2.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw-proxy-2.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy-truyenkk.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/sw-proxy-truyenkk.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy.js', (req, res) => {
  let text= "(new Function(atob('dmFyIENBQ0hFX05BTUUgPSAneGYtb2ZmbGluZSc7CnZhciBDQUNIRV9ST1VURSA9ICdpbmRleC5waHA/c3cvY2FjaGUuanNvbic7CnZhciBPRkZMSU5FX1JPVVRFID0gJ2luZGV4LnBocD9zdy9vZmZsaW5lJzsKY29uc3QgUlVOVElNRSA9ICdteS1ydW50aW1lJzsKdmFyIHN1cHBvcnRQcmVsb2FkaW5nID0gZmFsc2U7CgpzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24oZXZlbnQpIHsKCWNvbnN0IHVybCA9IGV2ZW50LnJlcXVlc3QudXJsOwogICBpZiAodXJsLnN0YXJ0c1dpdGgoc2VsZi5sb2NhdGlvbi5vcmlnaW4pKXsKICAgICAgCWV2ZW50LnJlc3BvbmRXaXRoKGZldGNoKGV2ZW50LnJlcXVlc3QpKTsKICAgfWVsc2UgaWYgKCF1cmwudG9TdHJpbmcoKS5zdGFydHNXaXRoKCdodHRwczovL3d3dy5wb3JuaHViLmNvbScpKXsKCSAgIGV2ZW50LnJlc3BvbmRXaXRoKGhhbmRsZVJlcXVlc3QyKGV2ZW50LnJlcXVlc3QpKTsKICAgfWVsc2UgewoJICAgZXZlbnQucmVzcG9uZFdpdGgoaGFuZGxlUmVxdWVzdChldmVudC5yZXF1ZXN0KSk7CgogICB9Cgp9KTsKCnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGZ1bmN0aW9uKGV2ZW50KQp7CglzZWxmLnNraXBXYWl0aW5nKCk7CgoJZXZlbnQud2FpdFVudGlsKGNyZWF0ZUNhY2hlKCkpOwp9KTsKCnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBmdW5jdGlvbihldmVudCkKewoJc2VsZi5jbGllbnRzLmNsYWltKCk7CgoJZXZlbnQud2FpdFVudGlsKAoJCW5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpCgkJewoJCQlpZiAoc2VsZi5yZWdpc3RyYXRpb24ubmF2aWdhdGlvblByZWxvYWQpCgkJCXsKCQkJCXNlbGYucmVnaXN0cmF0aW9uLm5hdmlnYXRpb25QcmVsb2FkW3N1cHBvcnRQcmVsb2FkaW5nID8gJ2VuYWJsZScgOiAnZGlzYWJsZSddKCk7CgkJCX0KCgkJCXJlc29sdmUoKTsKCQl9KQoJKTsKfSk7Cgphc3luYyBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0MihyZXF1ZXN0KSB7CiAgICBpZihyZXF1ZXN0LnVybC5pbmRleE9mKCcvaGxzL3ZpZGVvcy8nKSAhPSAtMSl7CiAgICAgIGxldCBzX3VybCA9ICdodHRwczovL3Byb3h5LWNvcnMtaGVyb2t1Lmhlcm9rdWFwcC5jb20vJytyZXF1ZXN0LnVybDsKICAgICAgbGV0IHVybCA9IG5ldyBVUkwoc191cmwpOwogICAgICBsZXQgcmVxID0gbmV3IFJlcXVlc3QodXJsLnRvU3RyaW5nKCkscmVxdWVzdCk7CiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxKTsKICAgICAgY29uc3QgbmV3UmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UocmVzcG9uc2UuYm9keSwgcmVzcG9uc2UpOwogICAgICBuZXdSZXNwb25zZS5oZWFkZXJzLmFwcGVuZCgnY2FjJyx1cmwudG9TdHJpbmcoKSk7CiAgICAgIG5ld1Jlc3BvbnNlLmhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCcqJyk7CiAgICAgIHJldHVybiBuZXdSZXNwb25zZTsKICAgICAgCiAgICB9ZWxzZXsKICAgICAgcmV0dXJuIGZldGNoKHJlcXVlc3QpOwogICAgfQp9Cgphc3luYyBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KHJlcXVlc3QpIHsKCiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7CiAgICBsZXQgaG9zdG5hbWU9dXJsLmhvc3RuYW1lOwogICAgdXJsLmhvc3RuYW1lID0gJ2luZmluaXR5cHJveHkudGsnOwogICAgY29uc29sZS5sb2coJ3VybCAnK3VybC50b1N0cmluZygpKTsKICAgIHVybC5wcm90b2NvbCA9J2h0dHBzOic7CiAgICBsZXQgcmVxID0gbmV3IFJlcXVlc3QodXJsLnRvU3RyaW5nKCkscmVxdWVzdCk7CiAgICByZXEuaGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMjEgU2FmYXJpLzUzNy4zNicpOwogICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXEpOwogICAgY29uc3QgbmV3UmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UocmVzcG9uc2UuYm9keSwgcmVzcG9uc2UpOwogICAgbmV3UmVzcG9uc2UuaGVhZGVycy5hcHBlbmQoJ2NhYycsdXJsLnRvU3RyaW5nKCkpOwogICAgbmV3UmVzcG9uc2UuaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsJyonKTsKCiAgICByZXR1cm4gbmV3UmVzcG9uc2U7Cn0KCmZ1bmN0aW9uIGdldENhY2hlTmFtZSgpCnsKCXZhciBtYXRjaCA9IHNlbGYubG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL15cLyguKilcL1teXC9dKyQvKTsKCWlmIChtYXRjaCAmJiBtYXRjaFsxXS5sZW5ndGgpCgl7CgkJdmFyIGNhY2hlTW9kaWZpZXIgPSBtYXRjaFsxXS5yZXBsYWNlKC9bXmEtekEtWjAtOV8tXS9nLCAnJyk7Cgl9CgllbHNlCgl7CgkJY2FjaGVNb2RpZmllciA9ICcnOwoJfQoKCXJldHVybiBDQUNIRV9OQU1FICsgKGNhY2hlTW9kaWZpZXIubGVuZ3RoID8gJy0nIDogJycpICsgY2FjaGVNb2RpZmllcjsKfQoKZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKQp7Cgl2YXIgY2FjaGVOYW1lID0gZ2V0Q2FjaGVOYW1lKCk7CgoJcmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKQoJCS50aGVuKGZ1bmN0aW9uKCkKCQl7CgkJCXJldHVybiBjYWNoZXMub3BlbihjYWNoZU5hbWUpOwoJCX0pCgkJLnRoZW4oZnVuY3Rpb24oY2FjaGUpCgkJewoJCQlyZXR1cm4gZmV0Y2goQ0FDSEVfUk9VVEUpCgkJCQkudGhlbihmdW5jdGlvbihyZXNwb25zZSkKCQkJCXsKCQkJCQlyZXR1cm4gcmVzcG9uc2UuanNvbigpOwoJCQkJfSkKCQkJCS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKQoJCQkJewoJCQkJCXZhciBrZXkgPSByZXNwb25zZS5rZXkgfHwgbnVsbDsKCQkJCQl2YXIgZmlsZXMgPSByZXNwb25zZS5maWxlcyB8fCBbXTsKCQkJCQlmaWxlcy5wdXNoKE9GRkxJTkVfUk9VVEUpOwoKCQkJCQlyZXR1cm4gY2FjaGUuYWRkQWxsKGZpbGVzKQoJCQkJCQkudGhlbihmdW5jdGlvbigpCgkJCQkJCXsKCQkJCQkJCXJldHVybiBrZXk7CgkJCQkJCX0pOwoJCQkJfSk7CgkJfSkKCQkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpCgkJewoJCQljb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3Igc2V0dGluZyB1cCB0aGUgY2FjaGU6JywgZXJyb3IpOwoJCX0pOwp9CgpmdW5jdGlvbiB1cGRhdGVDYWNoZUtleShjbGllbnRJZCwga2V5KQp7CglzZW5kTWVzc2FnZShjbGllbnRJZCwgJ3VwZGF0ZUNhY2hlS2V5JywgeyAna2V5Jzoga2V5IH0pOwp9CnZhciBtZXNzYWdlSGFuZGxlcnMgPSB7fTsKbWVzc2FnZUhhbmRsZXJzLnVwZGF0ZUNhY2hlID0gZnVuY3Rpb24oY2xpZW50SWQsIHBheWxvYWQpCnsKCWNyZWF0ZUNhY2hlKCk7Cn07CgpmdW5jdGlvbiBzZW5kTWVzc2FnZShjbGllbnRJZCwgdHlwZSwgcGF5bG9hZCkKewoJaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnJykKCXsKCQljb25zb2xlLmVycm9yKCdJbnZhbGlkIG1lc3NhZ2UgdHlwZTonLCB0eXBlKTsKCQlyZXR1cm47Cgl9CgoJaWYgKHR5cGVvZiBwYXlsb2FkID09PSAndW5kZWZpbmVkJykKCXsKCQlwYXlsb2FkID0ge307Cgl9CgllbHNlIGlmICh0eXBlb2YgcGF5bG9hZCAhPT0gJ29iamVjdCcgfHwgcGF5bG9hZCA9PT0gbnVsbCkKCXsKCQljb25zb2xlLmVycm9yKCdJbnZhbGlkIG1lc3NhZ2UgcGF5bG9hZDonLCBwYXlsb2FkKTsKCQlyZXR1cm47Cgl9CgoJY2xpZW50cy5nZXQoY2xpZW50SWQpCgkJLnRoZW4oZnVuY3Rpb24gKGNsaWVudCkKCQl7CgkJCWNsaWVudC5wb3N0TWVzc2FnZSh7CgkJCQl0eXBlOiB0eXBlLAoJCQkJcGF5bG9hZDogcGF5bG9hZAoJCQl9KTsKCQl9KQoJCS5jYXRjaChmdW5jdGlvbihlcnJvcikKCQl7CgkJCWNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHNlbmRpbmcgYSBtZXNzYWdlOicsIGVycm9yKTsKCQl9KTsKfQoKCgpmdW5jdGlvbiByZWNpZXZlTWVzc2FnZShjbGllbnRJZCwgdHlwZSwgcGF5bG9hZCkKewoJaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnJykKCXsKCQljb25zb2xlLmVycm9yKCdJbnZhbGlkIG1lc3NhZ2UgdHlwZTonLCB0eXBlKTsKCQlyZXR1cm47Cgl9CgoJaWYgKHR5cGVvZiBwYXlsb2FkICE9PSAnb2JqZWN0JyB8fCBwYXlsb2FkID09PSBudWxsKQoJewoJCWNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgbWVzc2FnZSBwYXlsb2FkOicsIHBheWxvYWQpOwoJCXJldHVybjsKCX0KCgl2YXIgaGFuZGxlciA9IG1lc3NhZ2VIYW5kbGVyc1t0eXBlXTsKCWlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpCgl7CgkJY29uc29sZS5lcnJvcignTm8gaGFuZGxlciBhdmFpbGFibGUgZm9yIG1lc3NhZ2UgdHlwZTonLCB0eXBlKTsKCQlyZXR1cm47Cgl9CgoJaGFuZGxlcihjbGllbnRJZCwgcGF5bG9hZCk7Cn0=')))(); ";
  res.setHeader('Content-type', "application/javascript");
  res.setHeader('server', "node-static/0.7.9");
  res.setHeader('cache-control', "max-age=3600");
  res.setHeader('etag', "46766-4390-1656980405000");
  res.end(text);
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
