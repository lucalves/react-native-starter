import VideoService from "../services/videoService"
import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";

export default ({videoIdArray}) => {

    // [thumbUrl, setThumbUrl] = useState([]);



    // useEffect(() => {

    //     async function getResponse() {
    //         const videoService = new VideoService();


    //         videoIdArray.forEach(async (element) => {
    //             const result = await videoService.getVideoInfo(element);
    //             console.log(element)
    
    //             const thumb = result.data.thumbnail_url;
    //             setThumbUrl(oldArray => [...oldArray, thumb]);
    //         });


    //         console.log(thumbUrl);
    //     }     

    //     getResponse();
        
    // }, [videoIdArray]);

    

    console.log(videoIdArray)

    return ( 
        <View style={style.container}>
            
            {/* <Text>{videoIdArray}</Text> */}
            <FlatList
                data={videoIdArray}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                // return <Text>{item.id}</Text>
                return <Image
                    source={{ uri: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}}
                    style={style.thumb}
                />
            }}
        />
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        minWidth: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'black'
    },
    thumb: {
        height: 300,
        width: 300
    }
});