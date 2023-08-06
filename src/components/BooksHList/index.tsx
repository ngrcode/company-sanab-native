import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Image, ScrollView, Pressable, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import {styles} from './style';
import MoreTitle from 'components/MoreTitle';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const BooksHList = (props: any) => {
  const {title, books, onPressMore, isFetching, ...rest} = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const clickBookImg = async (id: string) => {
    navigation.navigate('Book', {bookId: id});
  };

  return (
    <View style={[styles.container, {...rest}]}>
      <MoreTitle
        booksLength={books?.length}
        title={title}
        onPressMore={onPressMore}
      />
      {!isFetching ? (
        books?.length === 0 || books === undefined ? (
          <View style={styles.notFound}>
            <Text> کتابی در این دسته بندی ثبت نشده است!</Text>
          </View>
        ) : (
          <ScrollView horizontal={true} style={styles.horizontalScroll}>
            {books &&
              books.map((item: any, i: number) => {
                return (
                  <Pressable
                    key={item.id}
                    onPress={() => clickBookImg(item.id)}>
                    <View key={i} style={styles.imgWrapper}>
                      <Shadow distance={8}>
                        <Image
                          key={i}
                          source={{
                            uri: `${process.env.BASE_URL}/files/${item.image}`,
                          }}
                          style={styles.img}
                        />
                      </Shadow>
                    </View>
                  </Pressable>
                );
              })}
          </ScrollView>
        )
      ) : (
        <Text>در حال لود کردن ...</Text>
      )}
    </View>
  );
};

export default BooksHList;
