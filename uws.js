
const App = require('uWebSockets.js').App();
App.get('/*', (response, request) => response.end('ban!'));
App.listen(3000, token => !token && console.log(`Failed to start webserver on port ${port}`));
