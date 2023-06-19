import React from 'react';
import {Alert, Modal, View} from 'react-native';
import Form from '../ProfileForm';
import {styles} from './style';

export default function ProfileModal(props: any) {
  const {modalVisible, setModalVisible, input} = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Form setModalVisible={setModalVisible} input={input} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
