import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  BackHandler,
} from 'react-native';
import {styles} from './style';
import Button from 'components/Button';
import {BASE_URL} from 'env';
import BookModal from 'components/BookModal';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

function BooksVList(props: any) {
  const {books, headerTitle} = props;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [bookId, setBooKId] = useState<any>(null);

  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, []);

  // useEffect(() => {
  //   const backAction = (e: any) => {
  //     const {history} = navigation.getState();
  //     const exRoute = history[history.length - 1].key;
  //     // navigation.navigate(exRoute);
  //     navigation.goBack();
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // }, [navigation]);

  // useEffect(() => {
  //   const backAction = (e: any) => {
  //     navigation.navigate('category', {
  //       name: 'hCategory',
  //       categoryId: category.id,
  //       categoryName: category.name,
  //     });
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // }, [navigation]);

  const clickBookImg = (id: string) => {
    setModalVisible(true);
    setBooKId(id);
  };

  return (
    <>
      <BookModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        id={bookId}
      />
      {/* <ScrollView> */}
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
                      title={price}
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
      {/* </ScrollView> */}
    </>
  );
}
export default BooksVList;
