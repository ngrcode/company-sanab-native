import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Text, View, Image, Pressable} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {handleModalBook} from 'stores/slices/common.slices';
import Button from 'components/Button';
import {BASE_URL} from 'env';
import {styles} from './style';
import {useTranslation} from 'react-i18next';

function BooksVList(props: any) {
  const {books, headerTitle} = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, []);

  const clickBookImg = (bookId: string) => {
    navigation.navigate('Book', {bookId});
  };

  return (
    <View style={styles.container}>
      {books?.map((item: any) => {
        const {id, image, name, price, status, originalPrice, authors} = item;
        return (
          <View key={id}>
            <Pressable onPress={() => clickBookImg(id)}>
              <View style={styles.imgBlockWrapper}>
                <Shadow distance={8}>
                  <Image
                    style={styles.img}
                    key={id}
                    source={{uri: `${BASE_URL}/files/${image}`}}
                  />
                </Shadow>
                <View style={styles.imageDescContainer}>
                  <Text style={styles.time}>{name}</Text>
                  <Text style={styles.name}>{status?.label}</Text>
                  <Button
                    height={20}
                    width={70}
                    btnType="borderBlack"
                    title={price === 0 ? t('gl.free') : price}
                    fontWeight="400"
                    fontSize={9}
                    lineHeight={16}
                    marginTop={8}
                  />
                  <Text style={styles.discount}>{originalPrice}</Text>
                  <Text style={styles.name}>{authors}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
export default BooksVList;
