import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {styles} from './style';
import MoreTitle from 'components/MoreTitle';
import moment from 'moment-jalaali';
import {useSelector} from 'react-redux';

function UsersComment(props: any) {
  const {title, headTitle, arr, showMore} = props;
  const {common} = useSelector((state: RootState) => state);
  const {curUser} = common;

  return (
    <View style={styles.containerr}>
      {showMore && (
        <MoreTitle marginTop={24} marginBottom={16} title={headTitle} />
      )}
      <View style={styles.container}>
        <ScrollView horizontal={true} style={styles.scroll}>
          {arr?.map((item: any) => (
            <View key={item.id} style={styles.block}>
              <View style={styles.imgBlock}>
                <Image
                  style={styles.img}
                  source={require('assets/images/splash-books.png')}
                />
                <Text style={[styles.title, styles.text]}>
                  {item?.user?.fullName || curUser.fullName}
                </Text>
              </View>
              <Text style={[styles.desc, styles.text]} numberOfLines={3}>
                {item.content}
              </Text>
              <Text style={[styles.date, styles.text]}>
                {moment(item.createdAt, 'YYYY-M-D HH:mm:ss')
                  .endOf('jMonth')
                  .format('jYYYY/jM/jD')}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default UsersComment;
