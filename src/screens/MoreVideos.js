import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import VideoPlayer from '../components/VideoPlayer';

const DATA_WITH_FIFTH_ITEMS = [
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
    id: '0rsGyrN_Vy8',
  },
  {
    id: 'LT7DXofCP0E',
  },
  {
    id: 'vuYOvVioBrc',
  },
  {
    id: 'IvO1g9-eTM',
  },
  {
    id: 'FpDvvC20ieE',
  },
  {
    id: 'Ia7z4pMhDLY',
  },
  {
    id: '1yiWhK_bgtg',
  },
  {
    id: 'zJhHURu4qh8',
  },
  {
    id: 'xbhFXAuuxWA',
  },
  {
    id: 'Lpl8bcf8KHU',
  },
  {
    id: '3mqRJzXFhOk',
  },
];

const MoreVideos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_WITH_FIFTH_ITEMS}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <VideoPlayer videoId={item.id} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D021B',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MoreVideos;
