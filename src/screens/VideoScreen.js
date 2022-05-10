import React from 'react';
import {View, StyleSheet } from 'react-native';
import VideoDescription from '../components/VideoDescription';
import VideoPlayer from '../components/VideoPlayer';
import VideoTitle from '../components/VideoTitle';
import { getVideoIdFromYoutubeUrl } from '../utils/video.utils';

export const VideoScreen = ({ route }) => {

    const { item } = route.params;

    const videoId = getVideoIdFromYoutubeUrl(item.url);

    const fakeDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    return (
        <View style={style.container}>
            <VideoPlayer 
                videoId={videoId}
            />
            <View style={style.detailsContainer}>
                <VideoTitle videoTitle={item.title} />
                <VideoDescription description={fakeDescription} />
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#96008F',
    },
    detailsContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '2%'
    }
})