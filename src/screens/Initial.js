import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import VideoService from '../services/videoService';
import VideoThumb from '../components/VideoThumb';


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



export const Initial = ({ navigation }) => {

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
      <FlatList
        data={result}
        keyExtractor={((item, index) => index)}
        renderItem={({item}) => <VideoThumb videoItem={item} navigation={navigation} />
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
