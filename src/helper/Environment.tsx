let APIURL = 'https://dreamalish2.herokuapp.com';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3002';
        break;
    case 'dreamalish-client.herokuapp.com':
        APIURL = 'https://dreamalish2.herokuapp.com';
        
}

export default APIURL;
