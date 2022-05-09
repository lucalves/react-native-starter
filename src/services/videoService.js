import axios from 'axios';

export default class VideoService {
    async getVideoInfo(videoId) {
        const response = await axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
        return response;
    }
}