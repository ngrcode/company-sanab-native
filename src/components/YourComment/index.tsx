import Button from 'components/Button';
import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UsersComment from 'components/UsersComment';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import CommentForm from 'components/YourComment/CommentForm';

function YourComments(props: any) {
  const {title, desc, comments, btn, bookData, refetchCommentsBook} = props;
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <>
      {comments?.length > 0 && (
        <UsersComment arr={comments} headTitle="نظرات شما" />
      )}
      <View style={styles.yourCommentBlock}>
        <Text style={styles.subTitle}>{t('gl.addComment')}</Text>
        <View style={styles.container}>
          <Text style={[styles.title, styles.text]}>{title}</Text>
          <Button
            btnType="blueBorderNoBg"
            width={148}
            title={
              <CommentForm
                btn={btn}
                bookData={bookData}
                refetchCommentsBook={refetchCommentsBook}
              />
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
