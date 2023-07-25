import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {BASE_URL} from 'env';
import HTMLView from 'react-native-htmlview';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {styles, stylesFunc} from './style';
import BooksHList from 'components/BooksHList';
import UsersComment from 'components/UsersComment';
import YourComment from 'components/YourComment';
import {
  useGetBookQuery,
  useGetPublisherBooksQuery,
  useGetAuthorBooksQuery,
  usePostAddBookToLibraryMutation,
  // usePostBuyBookMutation,
} from 'services/book.service';
import {
  useGetBookCommentsQuery,
  useGetUserCommentsQuery,
} from 'services/comment.service';
import BookAddToMyBooks from 'components/BookAddToMyBooks.tsx';
// import {bookData} from 'utils/book.utils';
import FilesBlock from './FilesBlock';

const Book = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const common = useSelector((state: RootState) => state.common);
  const {token, curUser, modalBook} = common;
  const {bookId} = modalBook;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [publisherId, setPublisherId] = useState(null);
  const [authorId, setAuthorId] = useState(null);
  const {data: bookData, refetch: getBookData} = useGetBookQuery(bookId);
  const {data: bookCommentsData} = useGetBookCommentsQuery(bookId);
  const {data: userCommentsData} = useGetUserCommentsQuery(curUser.id);
  const {
    data: publisherBooks,
    isFetching: isFetchingPublisherBooks,
    isLoading,
    refetch,
  } = useGetPublisherBooksQuery(publisherId, {
    skip: typeof publisherId === 'string' ? false : true,
  });
  const [addBook] = usePostAddBookToLibraryMutation('post');
  const {data: authorBooks, isFetching: isFetchingAuthorBooks} =
    useGetAuthorBooksQuery(authorId, {
      skip: authorId ? false : true,
    });
  // const [buyBook, data] = usePostBuyBookMutation('post');

  const handlePressAuthor = () => {
    navigation.navigate('category', {
      name: 'author',
      authorName: bookData?.authors?.writer?.list[0]?.fullName,
      authorId: bookData?.authors?.writer?.list[0]?.id,
    });
  };

  const handlePressPublisher = () => {
    navigation.navigate('category', {
      name: 'publisher',
      publisherName: bookData?.publisher?.name,
      publisherId: bookData?.publisher?.id,
    });
  };

  // const buyBookHandler = () => {
  //   buyBook({
  //     id: bookData?.id,
  //     body: {
  //       token,
  //       from: `${process.env.BASE_URL}/books/${bookData?.id}`,
  //     },
  //   }).then((res: any) => {
  //   });
  // };

  useEffect(() => {
    if (bookData) {
      setPublisherId(bookData.publisher.id);
      setAuthorId(bookData?.authors?.writer?.list[0]?.id);
    }
  }, [bookData]);

  useEffect(() => {
    getBookData();
  }, [bookId]);
  console.log('------------');
  return (
    <>
      {typeof publisherId !== 'string' || isFetchingPublisherBooks ? (
        <View style={styles.loading}>
          <Text>{t('gl.loading')}</Text>
          <ActivityIndicator color={theme.colors.blue[0]} size="small" />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.margin24}>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.titleImg}
                source={{
                  uri: `${process.env.BASE_URL}/files/${bookData?.image}`,
                }}
              />
            </View>
            <Text style={styles.title}>{bookData?.name}</Text>
            <Text style={styles.breadCrumbs}>
              {bookData?.authors?.translator?.list[0]?.fullName}
            </Text>
            {token && (
              <BookAddToMyBooks
                id={bookId}
                isFree={bookData?.isFree}
                price={bookData?.price}
              />
            )}
            <FilesBlock bookData={bookData} />
            <View style={styles.shareIconBlock}>
              <Icon
                name="bookmark"
                style={styles.bookmarkIcon}
                onPress={() => addBook(bookId)}
              />
              <Icon name="share" style={styles.shareIcon} />
              {/* <Text style={styles.pageNumber}>تعداد صفحات : 124</Text> */}
              {/* <Text style={styles.printPrice}>قیمت چاپی : 12,400 تومان</Text> */}
            </View>
            <View style={stylesFunc(bookData?.content !== null).introduceBlock}>
              <Text style={styles.introduceTitle}>معرفی کتاب</Text>
              <HTMLView value={bookData?.content} stylesheet={styles} />
            </View>
          </View>
          <BooksHList
            title="از همین نشر"
            onPressMore={handlePressAuthor}
            books={publisherBooks?.data}
            isFetching={isFetchingPublisherBooks}
          />
          <View style={styles.borderBottom} />
          <BooksHList
            title="از همین نویسنده"
            onPressMore={handlePressPublisher}
            books={authorBooks?.data}
            isFetching={isFetchingAuthorBooks}
          />
          {/* <View style={styles.borderBottom} /> */}
          {bookCommentsData?.data?.length > 0 && (
            <UsersComment
              headTitle="نظرات کاربران"
              arr={bookCommentsData?.data}
              showMore={true}
            />
          )}
          {token && (
            <>
              <View style={styles.borderBottom} />
              <Text style={styles.yourComment}>نظر شما</Text>
              {/* <View style={styles.yourCommentBlock}> */}
              <YourComment
                title={`کاربر ${curUser.phone} `}
                desc="گزارش مشکل در این کتاب"
                btn="نوشتن نظر"
                comments={userCommentsData?.data}
              />
              {/* </View> */}
            </>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Book;
