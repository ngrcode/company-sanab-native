import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './style';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import {loginOrRegisterInfo} from 'utils/auth.utils';

const Item = (props: any) => {
  const {title, desc, id, navigateTo} = props;
  const navigation = useNavigation();

  return (
    <Pressable
      key={id}
      style={id === 2 ? styles.item : [styles.item, styles.borderBtm]}
      onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.descWrapper}>
        <Icon name="angle-left" style={styles.icon} />
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Item;
