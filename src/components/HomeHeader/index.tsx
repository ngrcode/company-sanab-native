import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useTheme, ParamListBase} from '@react-navigation/native';
import IconUser from 'react-native-vector-icons/FontAwesome';
import IconBag from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'stores/store';
import {handleAuth} from 'stores/slices/common.slices';

function Header() {
  const {colors} = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();
  const common = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  const token = common.token;

  return (
    <View style={styles.container}>
      <IconBag
        onPress={() => {
          navigation.navigate('PurchaseBasket');
        }}
        name="shopping-bag"
        color={colors.blue[0]}
        style={styles.icon}
      />
      <View>
        <Text style={styles.text1}>{t('gl.sanab')}</Text>
        <Text style={styles.text}>{t('gl.oneline-library-for-you')}</Text>
      </View>
      <IconUser
        onPress={() => {
          token
            ? navigation.navigate('profile')
            : navigation.navigate('LoginOrRegister');
        }}
        name="user-o"
        color={colors.blue[0]}
        style={{fontSize: 25}}
      />
    </View>
  );
}

export default Header;
