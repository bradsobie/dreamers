import axios from 'axios';

const CHURCH_ONLINE_API_URL = 'http://dreamers-atx.churchonline.org/api/v1/events/current';
export const getLiveInfo = () => axios.get(CHURCH_ONLINE_API_URL).then(response => response.data.response.item);