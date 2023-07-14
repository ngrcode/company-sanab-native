import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import PdfReader from 'components/PdfReader';
import EpubReader from 'components/EpubReader';
import Button from 'components/Button';
import PdfModal from 'components/Book/PdfModal';
import {styles} from './style';
import AudioBook from 'screens/AudioBook';

export default function FilesBlock(props: any) {
  const {bookData} = props;
  const [showPdf, setShowPdf] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <>
      {bookData?.files?.length !== 0 &&
      bookData?.files[0].name?.split('.').pop() === 'mp3' ? (
        <Pressable
          style={styles.audio}
          onPress={() => navigation.navigate('AudioBook')}>
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
          />
        </>
      )}
    </>
  );
}
