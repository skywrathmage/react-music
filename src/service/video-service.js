import fetch from 'isomorphic-fetch';
 
const getData = () => {
    return fetch('http://codegym.azurewebsites.net/videos/data.js', { mode: 'cors' });
};
 
export default { getData };