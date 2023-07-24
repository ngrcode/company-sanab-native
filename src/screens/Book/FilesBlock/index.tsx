import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import PdfModal from 'components/Book/PdfModal';
import Button from 'components/Button';
import {styles} from './style';

export default function FilesBlock(props: any) {
  const {bookData} = props;
  const [showPdf, setShowPdf] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <>
      {bookData?.files?.length !== 0 &&
        (bookData?.files[0].name?.split('.').pop() === 'mp3' ? (
          <Pressable
            style={styles.audio}
            onPress={() =>
              // navigation.navigate('AudioBook', {id: bookData?.files[0].uuid})
              navigation.navigate('AudioBook', {id: bookData?.id})
            }>
            <View style={styles.btnBlock}>
              <Icon name="angle-left" style={styles.angleLeftIcon} />
              <Text style={styles.readSample}>شنیدن فایل صوتی</Text>
            </View>
          </Pressable>
        ) : (
          <>
            <Button
              btnType="blueBorder"
              height={45}
              marginTop={12}
              onPress={() => setShowPdf(true)}
              title={
                <View style={styles.btnBlock}>
                  <Icon name="angle-left" style={styles.angleLeftIcon} />
                  <Text style={styles.readSample}>مطالعه نمونه</Text>
                </View>
              }
            />
            <PdfModal
              showPdf={showPdf}
              setShowPdf={setShowPdf}
              fileSrc={`${process.env.BASE_URL}/files/${bookData?.files[0]?.path}`}
              bookId={bookData.id}
              pageNumber={bookData.pageNumber}
            />
          </>
        ))}
    </>
  );
}
