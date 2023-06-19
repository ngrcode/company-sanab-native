import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from 'components/Button';

const MoreTitle = (props: any) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {title, onPressMore, booksLength, ...rest} = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {...rest}]}>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 13,
          lineHeight: 22,
          color: colors.singletons.black,
        }}>
        {title}
      </Text>
      {booksLength > 9 && (
        <Button
          title={
            <View style={styles.moreBlock}>
              <Icon name="angle-left" style={styles.icon} />
              <Text style={styles.moreText}>{t('gl.more')}</Text>
            </View>
          }
          btnType="defaultGray"
          width={50}
          marginLeft={25}
          onPress={onPressMore}
        />
      )}
    </View>
  );
};

export default MoreTitle;
