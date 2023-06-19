import React from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import {styles} from './style';
import {Formik} from 'formik';
import {t} from 'i18next';
import {discountCodeSchema} from 'utils/myLibrary.utils';
import Button from 'components/Button';

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
          <View>
            <View style={styles.inputWrapper}>
              <TextInput
                defaultValue=""
                style={styles.input}
                onChangeText={(e: any) => {
                  onChangeInput(e, setFieldValue);
                }}
                placeholder="کد تخفیف"
              />
              <Pressable onPress={() => console.info('hi')} style={styles.btn}>
                <Text style={styles.btnText}>{t('gl.register')}</Text>
              </Pressable>
            </View>
            <Text style={styles.textError}>{errors.code}</Text>
            <View style={styles.btnWrapper}>
              <Button
                title="پرداخت - 15000 تومان"
                onPress={() => console.info('hi')}
                btnType="blueBg"
                borderRadius={4}
                height={45}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default ContactUs;
