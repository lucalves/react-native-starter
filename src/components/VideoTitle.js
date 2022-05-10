import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ videoTitle }) => {
    return (
        <View style={style.textView}>
            <Text style={style.text}>{videoTitle}</Text>
        </View>

    )
}


const style = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    textView: {
        width: '100%',
    }
});