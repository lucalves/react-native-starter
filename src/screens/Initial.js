import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoService from '../services/videoService';
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

  const [result, setResult] = useState([]);

  const getResult = async () => {
    const videoService = new VideoService();

    const response = await videoService.getVideosInfo(DATA_WITH_FIVE_ITEMS);
    setResult(response);
  }

  useEffect(() => {
    getResult()
  }, [])


  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <FlatList
        data={result}
        keyExtractor={((item, index) => index)}
        renderItem={({item}) => <VideoThumb videoItem={item} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%'
  },
});

export default Initial;
