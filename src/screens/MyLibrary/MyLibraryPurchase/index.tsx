import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles, checkboxStyles} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {purchasesArr} from 'utils/myLibrary.utils';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const MyLibraryPurchase = () => {
  const {t} = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>خرید اشتراک کتابخانه سناب</Text>
      <Text style={styles.desc}>
        نوع اشتراک و مدت مورد نظرت رو برای خرید اشتراک انتخاب کن !
      </Text>
      <BouncyCheckbox
        style={[checkboxStyles(isChecked).checkbox, styles.mt24]}
        textStyle={checkboxStyles(isChecked).text}
        innerIconStyle={checkboxStyles(isChecked).innerIconStyle}
        iconStyle={checkboxStyles(isChecked).iconStyle}
        text="خرید اشتراک برای خودم"
        onPress={(isChecked: boolean) => {
          setIsChecked(!isChecked);
        }}
      />
      <BouncyCheckbox
        style={[checkboxStyles(isChecked).checkbox, styles.mt8]}
        textStyle={checkboxStyles(isChecked).text}
        innerIconStyle={checkboxStyles(isChecked).innerIconStyle}
        iconStyle={checkboxStyles(isChecked).iconStyle}
        text="خرید اشتراک هدیه برای دیگری"
        onPress={(isChecked: boolean) => {
          setIsChecked(!isChecked);
        }}
      />
      <View style={styles.mt54}>
        {purchasesArr.map((pur: any) => (
          <View style={styles.block} key={pur.id}>
            <Text style={styles.price}>{pur.price}</Text>
            <Text style={styles.buySubs}>خرید اشتراک</Text>
            <Text style={styles.period}>{pur.period}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MyLibraryPurchase;
