import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import IconUser from 'react-native-vector-icons/FontAwesome';
import IconBag from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'stores/store';
import {handleAuth} from 'stores/slices/common.slices';

function Header() {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {common} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const token = common.token;

  return (
    <View style={styles.container}>
      <IconBag
        onPress={() => {
          navigation.navigate('purchase-basket');
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
            : navigation.navigate('login-or-register');
        }}
        name="user-o"
        color={colors.blue[0]}
        style={{fontSize: 25}}
      />
    </View>
  );
}

export default Header;
