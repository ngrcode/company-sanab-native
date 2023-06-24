import React, {useState} from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import MyLibraryHeader from 'screens/MyLibrary/MyLibraryHeader';
import {ScrollView} from 'react-native';
import MyLibraryPurchase from 'screens/MyLibrary/MyLibraryPurchase';
import MyLibraryMyBooks from 'screens/MyLibrary/MyLibraryMyBooks';
import MyLibraryHeaderOffline from 'screens/MyLibrary/MylibraryHeaderOffline';
import MyLibraryHeaderBooks from 'screens/MyLibrary/MyLibraryHeaderBooks';
import MyLibraryForm from 'screens/MyLibrary/MyLibraryForm';
import MyLibraryBuyForm from 'screens/MyLibrary/MyLibraryBuyForm';
import MyLibraryGiftCard from 'screens/MyLibrary/MyLibraryGiftCard';
import {useSelector} from 'react-redux';
import {
  useGetBooksQuery,
  useGetBoughtsBooksQuery,
  useGetBoughtsBookByUserQuery,
} from 'services/book.service';
import Button from 'components/Button';

const MyLibrary = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {t} = useTranslation();
  const selector = useSelector(state => state.common);
  const logedInUserId = selector?.curUser?.id;
  const {data: boughtBooks, refetch: refetchBooks} =
    useGetBoughtsBookByUserQuery(logedInUserId, {
      skip: logedInUserId ? false : true,
    });

  const handleRefreshing = () => {
    refetchBooks();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      <MyLibraryHeaderBooks />
      {/* <MyLibraryForm /> */}
      {/* <MyLibraryGiftCard /> */}
      <MyLibraryBuyForm />
      {/* <MyLibraryPurchase /> */}
      {/* <Button onPress={() => refetchBooks()} btnType="blueBg" title="test" /> */}
      <MyLibraryMyBooks books={boughtBooks?.Books} />
    </ScrollView>
  );
};

export default MyLibrary;
