import axios from 'axios';


export default class VideoService {
    async getVideosInfo(DATA_WITH_FIVE_ITEMS) {

        const result = [];

        for(let item of DATA_WITH_FIVE_ITEMS) {
            const response = await axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${item.id}`);
            result.push(response.data);
        }
        
        return result;
    }
}