import React from 'react';
import {TextInput} from 'react-native';
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
  const {id, price} = props;
  const {t} = useTranslation();
  const {common} = useSelector((state: RootState) => state);
  const {token} = common;
  const [buyBook, {isLoading, data}] = usePostBuyBookMutation('post');

  return (
    <Formik
      initialValues={{
        token,
        from: `${process.env.BASE_URL}/books/${id}`,
      }}
      onSubmit={values => buyBook({body: values, id})}>
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
