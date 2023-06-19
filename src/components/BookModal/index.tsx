import React from 'react';
import {Modal, View} from 'react-native';
import {styles} from './style';
import Book from 'components/Book';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default function BookModal(props: any) {
  const {modalVisible, setModalVisible, id} = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <IconAnt
            name="closecircleo"
            style={styles.closeIcon}
            onPress={() => setModalVisible(false)}
          />
          <Book id={id} />
        </View>
      </Modal>
    </View>
  );
}
