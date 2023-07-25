import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useProgress} from 'react-native-track-player';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';

import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {formatDuration} from 'utils/common.utils';
import PlayListDownload from 'components/TrackPlayerAudio/PlayList/PlayListDownload';

function PlayListMiddle(props: any) {
  const {bookData} = props;
  const {files} = bookData;
  const theme = useTheme();
  const {duration, position} = useProgress(200);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.flexBlock}>
        <IconFeather name="headphones" style={styles.headPhoneIcon} />
        <Text style={styles.duration}>
          {`${formatDuration(duration - position)} ${t('gl.remainingTime')}`}
        </Text>
      </View>
      <PlayListDownload
        url={`${process.env.BASE_URL}/files/${files[0].uuid}`}
        title={files[0].name}
        volumeStyles={{color: theme.colors.blue[0], fontSize: 11}}>
        <IconIonicons
          name="download-outline"
          style={{color: theme.colors.blue[0], fontSize: 16}}
        />
      </PlayListDownload>
    </View>
  );
}
export default PlayListMiddle;
