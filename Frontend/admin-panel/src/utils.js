import {config} from './services/config.js';

export function createUrl(path) {
    return `${config.serverUrl}/${path}`;
}