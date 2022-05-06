import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';

import VideoPlayer from '../components/VideoPlayer';

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
    id: '0rsGyrN_Vy8',
  },
  {
    id: 'LT7DXofCP0E',
  },
];

const Initial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="white"
        title="Next screen with 15 items"
        onPress={() => navigation.navigate('MoreVideos')}
      />
      <FlatList
        data={DATA_WITH_FIVE_ITEMS}
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

export default Initial;
