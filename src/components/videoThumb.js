import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
export default ({ videoItem }) => {

    return (
        <TouchableOpacity 
            onPress={null}
            style={style.thumbContainer}
        >
            <Image
                source={{ uri: videoItem.thumbnail_url}}
                style={style.thumb}
            />
            <Text>Missa</Text>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    thumbContainer: {
        marginVertical: '5%',
        minWidth: '100%'
    },
    thumb: {
        height: 200,
        width: '100%',
    },
});