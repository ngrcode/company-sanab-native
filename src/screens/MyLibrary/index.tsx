import React, {useState} from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import MyLibraryHeader from 'screens/MyLibrary/MyLibraryHeader';
import {ScrollView} from 'react-native';
import MyLibraryPurchase from 'screens/MyLibrary/MyLibraryPurchase';
import MyLibraryYourBooks from 'screens/MyLibrary/MyLibraryYourBooks';
import MyLibraryHeaderOffline from 'screens/MyLibrary/MylibraryHeaderOffline';
import MyLibraryHeaderBooks from 'screens/MyLibrary/MyLibraryHeaderBooks';
import MyLibraryForm from 'screens/MyLibrary/MyLibraryForm';
import MyLibraryBuyForm from 'screens/MyLibrary/MyLibraryBuyForm';
import MyLibraryGiftCard from 'screens/MyLibrary/MyLibraryGiftCard';
import {useSelector} from 'react-redux';
import {
  useGetBooksQuery,
  useGetBoughtsBookByUserQuery,
} from 'services/book.service';

const MyLibrary = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {t} = useTranslation();
  const selector = useSelector(state => state.common);
  const {id: logedInUserId} = selector.curUser;
  const {data: boughtBooks, refetch: refetchMyBooks} =
    useGetBoughtsBookByUserQuery(logedInUserId);

  const handleRefreshing = () => {
    refetchMyBooks();
  };

  console.log('=========kk=========>', boughtBooks, logedInUserId);

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
      <MyLibraryYourBooks />
    </ScrollView>
  );
};

export default MyLibrary;
