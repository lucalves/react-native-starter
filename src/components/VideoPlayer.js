import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {
  const [result, setResult] = useState(null);
  const VIDEO_URL = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;

  const returnVideoInfo = async () => {
    const response = await axios.get(VIDEO_URL);

    setResult(response.data);
    console.log(response.data.title);
  };

  useEffect(() => {
    returnVideoInfo();
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        style={styles.image}
        source={{
          uri: `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&disablekb=1`,
        }}
        automaticallyAdjustContentInsets={false}
        javaScriptEnabled
      />
      <View style={styles.wrapInformation}>
        <Text style={styles.title}>{result ? result.title : null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  wrapInformation: {
    padding: 10,
    width: '100%',
    backgroundColor: '#4b1489',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  image: { width: 350 },
});

export default VideoPlayer;
