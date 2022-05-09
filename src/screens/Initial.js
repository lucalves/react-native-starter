import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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

const Initial = () => {
  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Initial;
