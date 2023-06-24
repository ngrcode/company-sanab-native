import React from 'react';
import {Modal, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import IconAnt from 'react-native-vector-icons/AntDesign';

import {handleModalBook} from 'stores/slices/common.slices';
import Book from 'components/Book';
import {styles} from './style';

export default function BookModal() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.common);
  const {show} = selector.modalBook;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        dispatch(handleModalBook({show: false, bookId: ''}));
      }}>
      <View style={styles.modalView}>
        <IconAnt
          name="closecircleo"
          style={styles.closeIcon}
          onPress={() => dispatch(handleModalBook({show: false, bookId: ''}))}
        />
        <Book />
      </View>
    </Modal>
  );
}
