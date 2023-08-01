import React from 'react';
import {TextInput, Alert} from 'react-native';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import {
  usePostBuyBookMutation,
  usePostAddBookToLibraryMutation,
} from 'services/book.service';
import Button from 'components/Button';
import {useTranslation} from 'react-i18next';
import Loading from 'components/Loading';

interface Props {
  id: string;
  price: number;
}

const BookAddToMyBooks = (props: Props) => {
  const {id, price, isFree} = props;
  const {t} = useTranslation();
  const common = useSelector((state: RootState) => state.common);
  const {token} = common;
  const [buyBook, {isLoading, data}] = usePostBuyBookMutation('post');
  const [addToLibrary, {data: dataAddToLibrary}] =
    usePostAddBookToLibraryMutation('post');

  return (
    <Formik
      initialValues={{
        token,
        from: `${process.env.BASE_URL}/books/${id}`,
      }}
      // onSubmit={values => buyBook({body: values, id})}>
      onSubmit={values => {
        if (isFree) {
          addToLibrary(id).then((res: any) => {
            let alert = {title: '', desc: ''};
            if (res?.error) {
              alert.title = t('gl.error');
              alert.desc = res?.error?.data?.error?.text;
            } else {
              alert.title = t('gl.success');
              alert.desc = res?.data?.text;
            }
            Alert.alert(alert.title, alert.desc, [
              {
                text: 'Cancel',
                onPress: () => console.info('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.info('OK Pressed')},
            ]);
          });
        } else {
          Alert.alert(t('gl.error'), 'امکان خرید کتاب ممکن نیست', [
            {
              text: 'Ask me later',
              onPress: () => console.info('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.info('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.info('OK Pressed')},
          ]);
        }
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <>
          <Loading loading={isLoading} />
          <TextInput
            onChangeText={handleChange('token')}
            onBlur={handleBlur('token')}
            value={token}
            style={{display: 'none'}}
          />
          <TextInput
            onChangeText={handleChange('from')}
            onBlur={handleBlur('from')}
            value={values.from}
            style={{display: 'none'}}
          />
          <Button
            onPress={handleSubmit}
            marginTop={32}
            height={45}
            btnType="blueBg"
            title={price === 0 ? t('gl.add') : `خرید - ${price} تومان`}
            // title={'اضافه کردن به کتابخانه من'}
          />
        </>
      )}
    </Formik>
  );
};

export default BookAddToMyBooks;
