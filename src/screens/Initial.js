import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import VideoThumb from '../components/videoThumb';

const DATA_WITH_FIVE_ITEMS = [
  {
    id: 'Hsi0nPw7nZQ',
  },
  {
    id: 'U9trUYVrI20',
  },
  {
    id: '9kY_e0z1rvA',
  },
  {
    id: 'LT7DXofCP0E',
  },
  {
    id: '0rsGyrN_Vy8',
  },
];

const Initial = () => {
  return (
    <View style={styles.container}>
      <VideoThumb videoIdArray={DATA_WITH_FIVE_ITEMS}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Initial;
