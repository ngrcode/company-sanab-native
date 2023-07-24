import React, {useState} from 'react';
import {View, Text, Image, Pressable, ScrollView, Modal} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TrackPlayer, {
  useProgress,
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';

import Icon from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

import TrackPlayerAudio from 'components/TrackPlayerAudio';

const ControlSpeed = (props: any) => {
  const {bookData, handleRefreshing, refreshing} = props;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);
  console.log(TrackPlayer.getRate().then(res => console.log(res)));
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.iconBlock} onPress={() => setModalVisible(true)}>
        <IconAntDesign name="download" style={styles.iconDownload} />
        <Text style={styles.iconText}>سرعت خواندن</Text>
      </Pressable>
    </>
  );
};

export default ControlSpeed;
