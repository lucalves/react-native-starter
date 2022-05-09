import React, { useState, useCallback } from 'react';
import { StyleSheet, Alert, View, Platform, Dimensions } from 'react-native';
import Button from '../components/Button';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoPlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const height = (Dimensions.get('window').width / 16) * 9;
  const width = (Dimensions.get('window').height / 16) * 9;

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Você finalizou essa aula!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <View
        pointerEvents={Platform.OS === 'android' ? 'none' : 'auto'}
        style={styles.container}
      >
        <YoutubePlayer
          height={height}
          width={width}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        {Platform.OS === 'android' ? (
          <Button title={playing ? 'Pause' : 'Play'} onPress={togglePlaying} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});

export default VideoPlayer;
