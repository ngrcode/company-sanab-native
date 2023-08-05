import React from 'react';
import {Modal, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import Book from 'components/Book';
import {styles} from './style';

export default function BookModal() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.common);
  const {show} = selector.modalBook;
  const navigation = useNavigation();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        navigation.goBack();
      }}>
      <View style={styles.modalView}>
        <IconAnt
          name="closecircleo"
          style={styles.closeIcon}
          onPress={() => navigation.goBack()}
        />
        <Book />
      </View>
    </Modal>
  );
}
