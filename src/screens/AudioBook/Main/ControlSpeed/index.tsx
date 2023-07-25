import React, {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {styles} from './style';

import Slider from '@react-native-community/slider';
import {useTranslation} from 'react-i18next';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ControlSpeed = () => {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [speed, setSpeed] = useState(1);

  const onPressMinusPlus = (state: string, rate: number) => {
    if (state === 'plus') {
      setSpeed(speed + 0.5);
    } else if (state === 'minus') {
      setSpeed(speed - 0.5);
    } else {
      setSpeed(rate);
    }
  };

  const pressConfirm = () => {
    TrackPlayer.setRate(speed);
    setModalVisible(false);
  };

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
            <Text style={styles.title}>سرعت خواندن</Text>
            <Text style={styles.speed}>
              {speed.toFixed(1)} <IconAntDesign name="close" />
            </Text>
            <View style={styles.sliderBlock}>
              <IconAntDesign
                size={20}
                name="minuscircleo"
                onPress={() => onPressMinusPlus('minus', 1)}
              />
              <Slider
                style={{
                  width: '85%',
                  height: 40,
                  borderStyle: 'solid',
                  borderColor: 'blue',
                  borderWidth: 1,
                }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#16BAC5"
                thumbTintColor="#16BAC5"
                maximumTrackTintColor="#DDDDDD"
                lowerLimit={0}
                //   onValueChange={e => TrackPlayer.seekTo(e)}
                value={0.5}
              />
              <IconAntDesign
                size={20}
                name="pluscircleo"
                onPress={() => onPressMinusPlus('plus', 2)}
              />
            </View>
            <View style={styles.speedsBlock}>
              <Text
                style={funcStyles(speed === 0.8).speedNum()}
                onPress={() => onPressMinusPlus('none', 0.8)}>
                0.8
              </Text>
              <Text
                style={styles.speedNum}
                onPress={() => onPressMinusPlus('none', 1.0)}>
                1.0
              </Text>
              <Text
                style={styles.speedNum}
                onPress={() => onPressMinusPlus('none', 1.2)}>
                1.2
              </Text>
              <Text
                style={styles.speedNum}
                onPress={() => onPressMinusPlus('none', 1.5)}>
                1.5
              </Text>
              <Text
                style={styles.speedNum}
                onPress={() => onPressMinusPlus('none', 2.0)}>
                2.0
              </Text>
            </View>
            <View style={styles.actBtnBlock}>
              <Text style={styles.confirm} onPress={() => pressConfirm()}>
                {t('gl.confirm')}
              </Text>
              <Text
                style={styles.cancel}
                onPress={() => setModalVisible(false)}>
                {t('gl.cancel')}
              </Text>
            </View>
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
