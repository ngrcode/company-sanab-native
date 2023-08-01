import React, {useState} from 'react';
import {Text, View, Pressable, Modal, Image, ScrollView} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './style';
import CommentAddForm from 'components/YourComment/CommentForm/CommentAddForm';
import {useTranslation} from 'react-i18next';

function CommentForm(props: any) {
  const {btn, bookData, refetchCommentsBook} = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const navigation = useNavigation();
  const {t} = useTranslation();

  const registerComment = (body: any) => {
    console.log(body);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setVisibleModal(true)}>
        <View style={styles.btn}>
          <Text style={styles.btnTitle}>{btn}</Text>
          <Icon name="edit" style={styles.btnIcon} />
        </View>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => {
          setVisibleModal(false);
        }}>
        <View style={styles.modalView}>
          <View>
            <IconAnt
              name="closecircleo"
              style={styles.closeIcon}
              onPress={() => setVisibleModal(false)}
            />
            <View style={styles.centered}>
              <Image
                style={styles.img}
                source={{
                  uri: `${process.env.BASE_URL}/files/${bookData?.image}`,
                }}
              />
              <CommentAddForm
                bookData={bookData}
                refetchCommentsBook={refetchCommentsBook}
                setVisibleModal={setVisibleModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default CommentForm;
