import Button from 'components/Button';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UsersComment from 'components/UsersComment';
import {useTranslation} from 'react-i18next';

function YourComments(props: any) {
  const {title, desc, comments, btn} = props;
  const {t} = useTranslation();

  return (
    <>
      {comments?.length > 0 && <UsersComment arr={comments} />}
      <View style={styles.yourCommentBlock}>
        <Text style={styles.subTitle}>{t('gl.addComment')}</Text>
        <View style={styles.container}>
          <Text style={[styles.title, styles.text]}>{title}</Text>
          <Button
            btnType="blueBorderNoBg"
            width={148}
            title={
              <View style={styles.btn}>
                <Text style={styles.btnTitle}>{btn}</Text>
                <Icon name="edit" style={styles.btnIcon} />
              </View>
            }
            height={45}
          />
          <View style={styles.descBlock}>
            <Icon name="keyboard-arrow-left" />
            <Text style={[styles.desc, styles.text]}>{desc}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
export default YourComments;
