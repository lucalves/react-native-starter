import React from 'react';
import {View, StyleSheet } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';

export const VideoScreen = ({ route }) => {

    const { item } = route.params;

    // const url = item.url;
    // const videoId = url.split('v=')[1];

    return (
        <View style={style.container}>
            
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#96008F',
        padding: '5%'
    }
})