import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import {useTheme} from '@react-navigation/native';

interface Props {
  loading: boolean;
}

const Loading = (props: Props) => {
  const {loading} = props;
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* <View> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          // setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View>
            <ActivityIndicator color={theme.colors.blue[0]} size="large" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loading;
