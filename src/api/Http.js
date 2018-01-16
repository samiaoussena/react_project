import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';

/**
 * Generates a Fetch confiugration object so we can share headers
 * @method generateFetchConfig
 * @param  {string}            method      HTTP verb
 * @param  {object}            [body=null] payload for post/put
 * @return {object}                        config
 */
function generateFetchConfig(method, body = null) {
    const upCasedMethod = method.toUpperCase();
    const token = Cookies.get('gitHubProfiles');
    const config = {
        method: upCasedMethod,
        headers: {
            'Content-Type': 'application/json',
            'gitHubProfile-Token': token
        },
        credentials: 'same-origin'
    };
    if (['POST', 'PUT'].includes(upCasedMethod)) {
        config.body = JSON.stringify(body);
    }
    return config;
}



/**
 * Fetch profile from the API
 * @method fetchprofile
 * @param  {string}   endpoint URL provided by Redux; the API will yield further endpoints we can access via the Link Header (https://www.w3.org/wiki/LinkHeader)
 * @return {Response}          Fetch API Response
 */
export function fetchProfile(endpoint) {
    return fetch('https://api.github.com/users/bradtraversy?client_id=60276e9f3dd284c6fa83 & client_secret= 298ede97639a6dedb4310f1469ded19b916d5571');
}

