import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './style';
import {Formik} from 'formik';
import {discountCodeSchema} from 'utils/myLibrary.utils';

function ContactUs() {
  const onChangeInput = (e, setFieldValue) => {
    setFieldValue('code', e);
  };

  const onSubmitHandler = () => {};

  return (
    <Formik
      validationSchema={discountCodeSchema}
      initialValues={{}}
      onSubmit={onSubmitHandler}>
      {({setFieldValue, values, errors, setErrors}: any) => {
        return (
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="نام دریافت کننده" />
            <TextInput
              style={styles.input}
              placeholder="شماره تلفن دریافت کننده"
            />
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="پیام همراه با کارت"
              numberOfLines={10}
              multiline={true}
            />
          </View>
        );
      }}
    </Formik>
  );
}
export default ContactUs;
