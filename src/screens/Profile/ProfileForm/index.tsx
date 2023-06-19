import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';

import {styles} from './style';
import Button from 'components/Button';
import Input from 'components/Input';
import Loading from 'components/Loading';
import {
  inuptPlaceholder,
  onChangeInput,
  validationSchema,
  title,
} from 'utils/profile.utils';
import {useEditUserMutation} from 'services/profile.service';
import {RootState} from 'stores/store';
import {editUserMethod} from 'methods/profile.method';

function Form(props: any) {
  const {setModalVisible, input} = props;
  const {t} = useTranslation();
  const [editUser, data] = useEditUserMutation('profile');
  const selector = useSelector((state: RootState) => state.common);
  const userId = selector?.curUser?.id;

  const onSubmitHandler = (values: any, setErrors: any) => {
    editUserMethod(values, setErrors, userId, editUser, input, setModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title(input)}</Text>
      <Formik
        validationSchema={validationSchema(input)}
        initialValues={{}}
        onSubmit={onSubmitHandler}>
        {({setFieldValue, values, errors, setErrors}: any) => {
          return (
            <View>
              <Loading loading={data.isLoading} />
              <Input
                marginTop={30}
                defaultValue=""
                onChangeText={(e: any) => {
                  onChangeInput(e, setFieldValue, input);
                }}
                placeholder={inuptPlaceholder(input)}
              />
              <Text style={styles.textError}>{Object.values(errors)[0]}</Text>
              <Button
                btnType="orange"
                title={t('auth.register')}
                width="100%"
                height={41}
                marginTop={12}
                onPress={() => onSubmitHandler(values, setErrors)}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

export default Form;
