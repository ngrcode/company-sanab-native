import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {View, Text, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useTheme} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Counter from './Counter';
import {useDispatch, useSelector} from 'react-redux';
import {handleLoginCode} from 'stores/slices/common.slices';
import {RootState} from 'stores/store';

const CELL_COUNT = 4;

const RecoveryCode = ({
  phone,
  handleResendCode,
  setFieldValue,
  errors,
  setShowRecovery,
}: any) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const selector = useSelector((state: RootState) => state.common);
  const [counterNum, setCounterNum] = useState(6000);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const dispatch = useDispatch();

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangeInput = (e: any) => {
    dispatch(handleLoginCode({id: 'prev', code: e}));
    setValue(e);
    setFieldValue('recoveryCode', e);
  };

  const handleEdit = () => {
    setShowRecovery(false);
    setFieldValue('recoveryCode');
    dispatch(handleLoginCode({id: '', code: ''}));
  };

  useEffect(() => {
    setValue(`${selector?.loginCode?.code}`);
    setFieldValue('recoveryCode', Number(selector?.loginCode?.code));
  }, [selector?.loginCode]);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.header}>{t('auth.enterCode')}</Text>
        <IconEntypo.Button
          name="edit"
          backgroundColor="transparent"
          color={theme.colors.blue[0]}
          onPress={handleEdit}
          style={styles.editIcon}>
          <Text style={styles.editText}>{t('gl.edit')}</Text>
          <Text style={styles.phoneNumber}>{phone}</Text>
        </IconEntypo.Button>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={onChangeInput}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text style={styles.mt20}>{errors}</Text>
        <View style={styles.resendBlock}>
          {counterNum !== 0 ? (
            <>
              <Text>{t('auth.resendCode')}</Text>
              <Counter counterNum={counterNum} setCounterNum={setCounterNum} />
            </>
          ) : (
            <Pressable onPress={handleResendCode}>
              <View style={styles.notGetCodeBlock}>
                <Text style={styles.sendAgain}>{t('auth.sendAgain')}</Text>
                <Text style={styles.notGetCode}>{t('auth.notGetCode')}</Text>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default RecoveryCode;
