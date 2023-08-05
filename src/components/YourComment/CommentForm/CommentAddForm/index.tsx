import React from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import {styles} from './style';
import {Formik} from 'formik';
import {discountCodeSchema} from 'utils/myLibrary.utils';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {usePostCommentMutation} from 'services/comment.service';

const validation = Yup.object().shape({
  content: Yup.string().required('وارد کردن فیلد مورد نظر الزامی میباشد!'),
});

function CommentAddForm(props: any) {
  const {bookData, refetchCommentsBook, setVisibleModal} = props;
  const {t} = useTranslation();
  const [addComment] = usePostCommentMutation('addComment');

  const registerComment = (body: any) => {
  };

  const onSubmitHandler = async (values: any) => {
    await addComment({values, bookId: bookData.id});
    refetchCommentsBook();
    setVisibleModal(false);
  };

  return (
    <Formik
      validationSchema={validation}
      initialValues={{}}
      onSubmit={(values: any) => onSubmitHandler(values)}>
      {({setFieldValue, values, handleSubmit, handleChange}: any) => {
        return (
          <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.title}>ثبت نظر</Text>
              <TextInput
                style={styles.input}
                placeholder="نام نظر دهنده"
                value={bookData.name}
                editable={false}
              />
              <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="نظر خود را وارد کنید"
                numberOfLines={10}
                multiline={true}
                onChangeText={handleChange('content')}
              />
              <Pressable style={styles.registerBtn} onPress={handleSubmit}>
                <Text style={styles.registerText}>{t('gl.register')}</Text>
              </Pressable>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default CommentAddForm;
