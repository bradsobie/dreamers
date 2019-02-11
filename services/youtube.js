import axios from 'axios';

const API_KEY = 'AIzaSyBpV5_UnkH14X7_RXSde0DEMPLSi9p0HIM';
const PLAYLIST_ID = 'PLFzwoqqIX3fk5ytCmA_X15qGhTkpUqtDe';
const API_URL = 'https://www.googleapis.com/youtube/v3';

export const getVideos = () =>
    axios.get(`${API_URL}/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`)
    .then(response => response.data.items);