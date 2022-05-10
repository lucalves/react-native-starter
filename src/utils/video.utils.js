export const getVideoIdFromYoutubeUrl = (url) => {
    const videoId = url.split('v=')[1];
    
    return videoId;
}