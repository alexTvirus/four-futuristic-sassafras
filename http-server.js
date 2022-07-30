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

app.get('/sw-proxyx.js', (req, res) => {
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

app.get('/interrupt.js', (req, res) => {
  distFolder.serve(req, res, function (err, result) {
            // Fallback for history mode
            if (err !== null && err.status === 404) {
                distFolder.serveFile('/interrupt.js', 200, {}, req, res);
            }
        });
});

app.get('/sw-proxy.js', (req, res) => {
  let text= "(new Function(atob('dmFyIF8weDFhZjAxYz1fMHg0NWExOyhmdW5jdGlvbihfMHgxMDYxZjMsXzB4ZDViZmQxKXt2YXIgXzB4MWUwMjRkPV8weDQ1YTEsXzB4NWQzOGNkPV8weDEwNjFmMygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NWRiMWJhPS1wYXJzZUludChfMHgxZTAyNGQoMHgxNTYpKS8weDErcGFyc2VJbnQoXzB4MWUwMjRkKDB4MTZjKSkvMHgyKihwYXJzZUludChfMHgxZTAyNGQoMHgxODIpKS8weDMpKy1wYXJzZUludChfMHgxZTAyNGQoMHgxN2EpKS8weDQqKC1wYXJzZUludChfMHgxZTAyNGQoMHgxNjcpKS8weDUpK3BhcnNlSW50KF8weDFlMDI0ZCgweDE5NCkpLzB4NistcGFyc2VJbnQoXzB4MWUwMjRkKDB4MThlKSkvMHg3K3BhcnNlSW50KF8weDFlMDI0ZCgweDE5NykpLzB4OCstcGFyc2VJbnQoXzB4MWUwMjRkKDB4MTc1KSkvMHg5KihwYXJzZUludChfMHgxZTAyNGQoMHgxODgpKS8weGEpO2lmKF8weDVkYjFiYT09PV8weGQ1YmZkMSlicmVhaztlbHNlIF8weDVkMzhjZFsncHVzaCddKF8weDVkMzhjZFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MzQxZmMzKXtfMHg1ZDM4Y2RbJ3B1c2gnXShfMHg1ZDM4Y2RbJ3NoaWZ0J10oKSk7fX19KF8weDUzZjEsMHhkYzU3ZSkpO3ZhciBDQUNIRV9OQU1FPV8weDFhZjAxYygweDE5OCksQ0FDSEVfUk9VVEU9c2VsZltfMHgxYWYwMWMoMHgxODApXVsnb3JpZ2luJ10rXzB4MWFmMDFjKDB4MTlhKSxPRkZMSU5FX1JPVVRFPV8weDFhZjAxYygweDE5OSk7Y29uc3QgUlVOVElNRT1fMHgxYWYwMWMoMHgxNmYpO2Z1bmN0aW9uIF8weDQ1YTEoXzB4NWNkNWIwLF8weDc5MDVkZSl7dmFyIF8weDUzZjE0MT1fMHg1M2YxKCk7cmV0dXJuIF8weDQ1YTE9ZnVuY3Rpb24oXzB4NDVhMTQ3LF8weDQwZmE4Nil7XzB4NDVhMTQ3PV8weDQ1YTE0Ny0weDE1NDt2YXIgXzB4MjRkZjU5PV8weDUzZjE0MVtfMHg0NWExNDddO3JldHVybiBfMHgyNGRmNTk7fSxfMHg0NWExKF8weDVjZDViMCxfMHg3OTA1ZGUpO312YXIgc3VwcG9ydFByZWxvYWRpbmc9IVtdO2Z1bmN0aW9uIF8weDUzZjEoKXt2YXIgXzB4M2EzM2I2PVsnb3BlbicsJzM3MjYwUVlXYVNYJywnc3RyaW5nJywncmVnaXN0cmF0aW9uJywnSW52YWxpZFx4MjBtZXNzYWdlXHgyMHBheWxvYWQ6JywnaGVhZGVycycsJ2Vycm9yJywnNjk4ODk4MmxQU25ldicsJ3Bvc3RNZXNzYWdlJywnY2F0Y2gnLCduYXZpZ2F0aW9uUHJlbG9hZCcsJ3JlcXVlc3QnLCdmZXRjaCcsJzU4NDY1NTZkY1pQbGMnLCdkZWxldGUnLCdodHRwczovL2luZmluaXR5cHJveHkudGsvcHJveHkvJywnNTEyMzg0UXFRWExHJywneGYtb2ZmbGluZScsJ2luZGV4LnBocD9zdy9vZmZsaW5lJywnL2NhY2hlLmpzb24nLCd1cGRhdGVDYWNoZUtleScsJ2JvZHknLCc3NDQ5MDJZakl4bnAnLCcvaGxzL3ZpZGVvcy8nLCdhcHBlbmQnLCdNb3ppbGxhLzUuMFx4MjAoV2luZG93c1x4MjBOVFx4MjAxMC4wO1x4MjBXaW42NDtceDIweDY0KVx4MjBBcHBsZVdlYktpdC81MzcuMzZceDIwKEtIVE1MLFx4MjBsaWtlXHgyMEdlY2tvKVx4MjBDaHJvbWUvODUuMC40MTgzLjEyMVx4MjBTYWZhcmkvNTM3LjM2JywnaW5zdGFsbCcsJ3NldCcsJ3N0YXJ0c1dpdGgnLCdza2lwV2FpdGluZycsJ2luZmluaXR5cHJveHkudGsnLCd1bmRlZmluZWQnLCdob3N0bmFtZScsJ2NsaWVudHMnLCd1cmxceDIwJywnZW5hYmxlJywndGhlbicsJ2FkZEV2ZW50TGlzdGVuZXInLCdUaGVyZVx4MjB3YXNceDIwYW5ceDIwZXJyb3JceDIwc2V0dGluZ1x4MjB1cFx4MjB0aGVceDIwY2FjaGU6JywnNzA5OTU1MHB0VWNOdycsJ3JlcGxhY2UnLCdpbmRleE9mJywnanNvbicsJ29iamVjdCcsJzUyMjAzMGFLb1F2bCcsJ3Byb3RvY29sJywndG9TdHJpbmcnLCdteS1ydW50aW1lJywndXJsJywnYWN0aXZhdGUnLCdjYWMnLCdVc2VyLUFnZW50JywnZGlzYWJsZScsJzMzMzBqa1dER0EnLCdOb1x4MjBoYW5kbGVyXHgyMGF2YWlsYWJsZVx4MjBmb3JceDIwbWVzc2FnZVx4MjB0eXBlOicsJ2ZpbGVzJywnbG9nJywnd2FpdFVudGlsJywnNGhicUJUVScsJ2xlbmd0aCcsJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsJ0ludmFsaWRceDIwbWVzc2FnZVx4MjB0eXBlOicsJ21hdGNoJywnaHR0cHM6JywnbG9jYXRpb24nLCdwdXNoJywnMThIdEVIYmwnLCdvcmlnaW4nLCdyZXNwb25kV2l0aCcsJ2NsYWltJywnZ2V0J107XzB4NTNmMT1mdW5jdGlvbigpe3JldHVybiBfMHgzYTMzYjY7fTtyZXR1cm4gXzB4NTNmMSgpO31zZWxmW18weDFhZjAxYygweDE2NSldKF8weDFhZjAxYygweDE5MyksZnVuY3Rpb24oXzB4MjBjOWI2KXt2YXIgXzB4NGVlNTZjPV8weDFhZjAxYztjb25zdCBfMHgzMTU2ZGY9XzB4MjBjOWI2W18weDRlZTU2YygweDE5MildW18weDRlZTU2YygweDE3MCldO2lmKF8weDMxNTZkZltfMHg0ZWU1NmMoMHgxNWMpXShzZWxmW18weDRlZTU2YygweDE4MCldW18weDRlZTU2YygweDE4MyldKSlfMHgyMGM5YjZbJ3Jlc3BvbmRXaXRoJ10oZmV0Y2goXzB4MjBjOWI2W18weDRlZTU2YygweDE5MildKSk7ZWxzZSFfMHgzMTU2ZGZbXzB4NGVlNTZjKDB4MTZlKV0oKVtfMHg0ZWU1NmMoMHgxNWMpXSgnaHR0cHM6Ly93d3cucG9ybmh1Yi5jb20nKT9fMHgyMGM5YjZbJ3Jlc3BvbmRXaXRoJ10oaGFuZGxlUmVxdWVzdDIoXzB4MjBjOWI2W18weDRlZTU2YygweDE5MildKSk6XzB4MjBjOWI2W18weDRlZTU2YygweDE4NCldKGhhbmRsZVJlcXVlc3QoXzB4MjBjOWI2WydyZXF1ZXN0J10pKTt9KSxzZWxmW18weDFhZjAxYygweDE2NSldKF8weDFhZjAxYygweDE1YSksZnVuY3Rpb24oXzB4MWI2MmMwKXt2YXIgXzB4NTBhMzQwPV8weDFhZjAxYztzZWxmW18weDUwYTM0MCgweDE1ZCldKCksXzB4MWI2MmMwW18weDUwYTM0MCgweDE3OSldKGNyZWF0ZUNhY2hlKCkpO30pLHNlbGZbXzB4MWFmMDFjKDB4MTY1KV0oXzB4MWFmMDFjKDB4MTcxKSxmdW5jdGlvbihfMHg0NGE2NWMpe3ZhciBfMHgyMzgzYjc9XzB4MWFmMDFjO3NlbGZbXzB4MjM4M2I3KDB4MTYxKV1bXzB4MjM4M2I3KDB4MTg1KV0oKSxfMHg0NGE2NWNbJ3dhaXRVbnRpbCddKG5ldyBQcm9taXNlKGZ1bmN0aW9uKF8weDQzNmNiOCl7dmFyIF8weGVhNDU2YT1fMHgyMzgzYjc7c2VsZltfMHhlYTQ1NmEoMHgxOGEpXVtfMHhlYTQ1NmEoMHgxOTEpXSYmc2VsZltfMHhlYTQ1NmEoMHgxOGEpXVtfMHhlYTQ1NmEoMHgxOTEpXVtzdXBwb3J0UHJlbG9hZGluZz9fMHhlYTQ1NmEoMHgxNjMpOl8weGVhNDU2YSgweDE3NCldKCksXzB4NDM2Y2I4KCk7fSkpO30pO2FzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QyKF8weDRhZDRmMil7dmFyIF8weDI1NTIwYj1fMHgxYWYwMWM7aWYoXzB4NGFkNGYyW18weDI1NTIwYigweDE3MCldW18weDI1NTIwYigweDE2OSldKF8weDI1NTIwYigweDE1NykpIT0tMHgxKXtsZXQgXzB4NTBlODE3PV8weDI1NTIwYigweDE5NikrXzB4NGFkNGYyWyd1cmwnXSxfMHg1YmUyMGE9bmV3IFVSTChfMHg1MGU4MTcpLF8weDNmODI2Zj1uZXcgUmVxdWVzdChfMHg1YmUyMGFbXzB4MjU1MjBiKDB4MTZlKV0oKSxfMHg0YWQ0ZjIpO2NvbnN0IF8weDQ5NTY1YT1hd2FpdCBmZXRjaChfMHgzZjgyNmYpLF8weDRhOTE2ZT1uZXcgUmVzcG9uc2UoXzB4NDk1NjVhWydib2R5J10sXzB4NDk1NjVhKTtyZXR1cm4gXzB4NGE5MTZlW18weDI1NTIwYigweDE4YyldW18weDI1NTIwYigweDE1OCldKF8weDI1NTIwYigweDE3MiksXzB4NWJlMjBhW18weDI1NTIwYigweDE2ZSldKCkpLF8weDRhOTE2ZVtfMHgyNTUyMGIoMHgxOGMpXVtfMHgyNTUyMGIoMHgxNTgpXShfMHgyNTUyMGIoMHgxN2MpLCcqJyksXzB4NGE5MTZlO31lbHNlIHJldHVybiBmZXRjaChfMHg0YWQ0ZjIpO31hc3luYyBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KF8weDU5NzQ0MSl7dmFyIF8weDJhMDNjMD1fMHgxYWYwMWM7bGV0IF8weDU5YWQ1YT1uZXcgVVJMKF8weDU5NzQ0MVtfMHgyYTAzYzAoMHgxNzApXSksXzB4MTY1ZDJmPV8weDU5YWQ1YVsnaG9zdG5hbWUnXTtfMHg1OWFkNWFbXzB4MmEwM2MwKDB4MTYwKV09XzB4MmEwM2MwKDB4MTVlKSxjb25zb2xlW18weDJhMDNjMCgweDE3OCldKF8weDJhMDNjMCgweDE2MikrXzB4NTlhZDVhW18weDJhMDNjMCgweDE2ZSldKCkpLF8weDU5YWQ1YVtfMHgyYTAzYzAoMHgxNmQpXT1fMHgyYTAzYzAoMHgxN2YpO2xldCBfMHg0ODNmYWY9bmV3IFJlcXVlc3QoXzB4NTlhZDVhW18weDJhMDNjMCgweDE2ZSldKCksXzB4NTk3NDQxKTtfMHg0ODNmYWZbXzB4MmEwM2MwKDB4MThjKV1bXzB4MmEwM2MwKDB4MTViKV0oXzB4MmEwM2MwKDB4MTczKSxfMHgyYTAzYzAoMHgxNTkpKTtjb25zdCBfMHg1MzUyOTI9YXdhaXQgZmV0Y2goXzB4NDgzZmFmKSxfMHgzNmI5YjY9bmV3IFJlc3BvbnNlKF8weDUzNTI5MltfMHgyYTAzYzAoMHgxNTUpXSxfMHg1MzUyOTIpO3JldHVybiBfMHgzNmI5YjZbXzB4MmEwM2MwKDB4MThjKV1bXzB4MmEwM2MwKDB4MTU4KV0oXzB4MmEwM2MwKDB4MTcyKSxfMHg1OWFkNWFbJ3RvU3RyaW5nJ10oKSksXzB4MzZiOWI2W18weDJhMDNjMCgweDE4YyldW18weDJhMDNjMCgweDE1OCldKF8weDJhMDNjMCgweDE3YyksJyonKSxfMHgzNmI5YjY7fWZ1bmN0aW9uIGdldENhY2hlTmFtZSgpe3ZhciBfMHg1ZTI3YjY9XzB4MWFmMDFjLF8weDU1NmNmMD1zZWxmW18weDVlMjdiNigweDE4MCldWydwYXRobmFtZSddW18weDVlMjdiNigweDE3ZSldKC9eXC8oLiopXC9bXlwvXSskLyk7aWYoXzB4NTU2Y2YwJiZfMHg1NTZjZjBbMHgxXVtfMHg1ZTI3YjYoMHgxN2IpXSl2YXIgXzB4ZDY2MGI0PV8weDU1NmNmMFsweDFdW18weDVlMjdiNigweDE2OCldKC9bXmEtekEtWjAtOV8tXS9nLCcnKTtlbHNlIF8weGQ2NjBiND0nJztyZXR1cm4gQ0FDSEVfTkFNRSsoXzB4ZDY2MGI0W18weDVlMjdiNigweDE3YildPyctJzonJykrXzB4ZDY2MGI0O31mdW5jdGlvbiBjcmVhdGVDYWNoZSgpe3ZhciBfMHgzNzAzMDY9XzB4MWFmMDFjLF8weDQ0YTE0OT1nZXRDYWNoZU5hbWUoKTtyZXR1cm4gY2FjaGVzW18weDM3MDMwNigweDE5NSldKF8weDQ0YTE0OSlbJ3RoZW4nXShmdW5jdGlvbigpe3ZhciBfMHhkM2VkMDM9XzB4MzcwMzA2O3JldHVybiBjYWNoZXNbXzB4ZDNlZDAzKDB4MTg3KV0oXzB4NDRhMTQ5KTt9KVtfMHgzNzAzMDYoMHgxNjQpXShmdW5jdGlvbihfMHgyNGFiOWMpe3ZhciBfMHgzNTIwMWM9XzB4MzcwMzA2O2xldCBfMHgyMGQ1MWQ9bmV3IFVSTChDQUNIRV9ST1VURSk7cmV0dXJuIF8weDIwZDUxZFtfMHgzNTIwMWMoMHgxNmQpXT0naHR0cHM6JyxmZXRjaChfMHgyMGQ1MWRbJ2hyZWYnXSlbXzB4MzUyMDFjKDB4MTY0KV0oZnVuY3Rpb24oXzB4MTU0MGVkKXt2YXIgXzB4NWQ5NjM0PV8weDM1MjAxYztyZXR1cm4gXzB4MTU0MGVkW18weDVkOTYzNCgweDE2YSldKCk7fSlbJ3RoZW4nXShmdW5jdGlvbihfMHg1YjYxOTEpe3ZhciBfMHgxMWI1Y2E9XzB4MzUyMDFjLF8weGI2ZTlhOT1fMHg1YjYxOTFbJ2tleSddfHxudWxsLF8weDQ0ZGZkPV8weDViNjE5MVtfMHgxMWI1Y2EoMHgxNzcpXXx8W107cmV0dXJuIF8weDQ0ZGZkW18weDExYjVjYSgweDE4MSldKE9GRkxJTkVfUk9VVEUpLF8weDI0YWI5Y1snYWRkQWxsJ10oXzB4NDRkZmQpW18weDExYjVjYSgweDE2NCldKGZ1bmN0aW9uKCl7cmV0dXJuIF8weGI2ZTlhOTt9KTt9KTt9KVtfMHgzNzAzMDYoMHgxOTApXShmdW5jdGlvbihfMHg1Njc3YjQpe3ZhciBfMHg1NmFlYjM9XzB4MzcwMzA2O2NvbnNvbGVbJ2Vycm9yJ10oXzB4NTZhZWIzKDB4MTY2KSxfMHg1Njc3YjQpO30pO31mdW5jdGlvbiB1cGRhdGVDYWNoZUtleShfMHg1Y2YyMDcsXzB4MzdmODZiKXt2YXIgXzB4MzJkZTVmPV8weDFhZjAxYztzZW5kTWVzc2FnZShfMHg1Y2YyMDcsXzB4MzJkZTVmKDB4MTU0KSx7J2tleSc6XzB4MzdmODZifSk7fXZhciBtZXNzYWdlSGFuZGxlcnM9e307bWVzc2FnZUhhbmRsZXJzWyd1cGRhdGVDYWNoZSddPWZ1bmN0aW9uKF8weDMyMDRhMCxfMHg1M2ExMzEpe2NyZWF0ZUNhY2hlKCk7fTtmdW5jdGlvbiBzZW5kTWVzc2FnZShfMHg1YTNkNWIsXzB4MzFiZmJiLF8weDNmMWRlZCl7dmFyIF8weDI5ZWVhZT1fMHgxYWYwMWM7aWYodHlwZW9mIF8weDMxYmZiYiE9PSdzdHJpbmcnfHxfMHgzMWJmYmI9PT0nJyl7Y29uc29sZVtfMHgyOWVlYWUoMHgxOGQpXShfMHgyOWVlYWUoMHgxN2QpLF8weDMxYmZiYik7cmV0dXJuO31pZih0eXBlb2YgXzB4M2YxZGVkPT09XzB4MjllZWFlKDB4MTVmKSlfMHgzZjFkZWQ9e307ZWxzZXtpZih0eXBlb2YgXzB4M2YxZGVkIT09XzB4MjllZWFlKDB4MTZiKXx8XzB4M2YxZGVkPT09bnVsbCl7Y29uc29sZVsnZXJyb3InXShfMHgyOWVlYWUoMHgxOGIpLF8weDNmMWRlZCk7cmV0dXJuO319c2VsZltfMHgyOWVlYWUoMHgxNjEpXVtfMHgyOWVlYWUoMHgxODYpXShfMHg1YTNkNWIpWyd0aGVuJ10oZnVuY3Rpb24oXzB4M2YzODJmKXt2YXIgXzB4MjcxMmFkPV8weDI5ZWVhZTtfMHgzZjM4MmZbXzB4MjcxMmFkKDB4MThmKV0oeyd0eXBlJzpfMHgzMWJmYmIsJ3BheWxvYWQnOl8weDNmMWRlZH0pO30pW18weDI5ZWVhZSgweDE5MCldKGZ1bmN0aW9uKF8weDhmOGY3Zil7dmFyIF8weDc5MmMxMj1fMHgyOWVlYWU7Y29uc29sZVtfMHg3OTJjMTIoMHgxOGQpXSgnQW5ceDIwZXJyb3JceDIwb2NjdXJyZWRceDIwd2hpbGVceDIwc2VuZGluZ1x4MjBhXHgyMG1lc3NhZ2U6JyxfMHg4ZjhmN2YpO30pO31mdW5jdGlvbiByZWNpZXZlTWVzc2FnZShfMHg0ZmM1MDAsXzB4NWJlMWZkLF8weDM3ZmExNCl7dmFyIF8weDQ5NTY4Nj1fMHgxYWYwMWM7aWYodHlwZW9mIF8weDViZTFmZCE9PV8weDQ5NTY4NigweDE4OSl8fF8weDViZTFmZD09PScnKXtjb25zb2xlW18weDQ5NTY4NigweDE4ZCldKCdJbnZhbGlkXHgyMG1lc3NhZ2VceDIwdHlwZTonLF8weDViZTFmZCk7cmV0dXJuO31pZih0eXBlb2YgXzB4MzdmYTE0IT09XzB4NDk1Njg2KDB4MTZiKXx8XzB4MzdmYTE0PT09bnVsbCl7Y29uc29sZVsnZXJyb3InXShfMHg0OTU2ODYoMHgxOGIpLF8weDM3ZmExNCk7cmV0dXJuO312YXIgXzB4NDExYzRiPW1lc3NhZ2VIYW5kbGVyc1tfMHg1YmUxZmRdO2lmKHR5cGVvZiBfMHg0MTFjNGI9PT1fMHg0OTU2ODYoMHgxNWYpKXtjb25zb2xlW18weDQ5NTY4NigweDE4ZCldKF8weDQ5NTY4NigweDE3NiksXzB4NWJlMWZkKTtyZXR1cm47fV8weDQxMWM0YihfMHg0ZmM1MDAsXzB4MzdmYTE0KTt9')))(); ";
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
