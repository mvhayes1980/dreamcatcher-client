let APIURL = 'https://dreamcatcher-server.herokuapp.com';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3002';
        break;
    case 'tc-pokemon-client.herokuapp.com':
        APIURL = 'https://dreamcatcher-server.herokuapp.com';
        
}

export default APIURL;