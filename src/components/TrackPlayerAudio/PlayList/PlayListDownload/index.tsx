import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import RNFetchBlob, {base64DataString} from 'rn-fetch-blob';

import {styles} from './style';

const PlayListDownload = (props: any) => {
  const {url, title, iconStyles, volumeStyles, children} = props;
  const [audioSize, setAudioSize] = useState(0);

  const getSize = async () => {
    const path = RNFetchBlob.fs.dirs.CacheDir;
    const stat = await RNFetchBlob.fs.stat(path);
    const curSize = formatAudioSize(stat.size);
    setAudioSize(curSize);
  };

  const formatAudioSize = (size: any) => {
    let curSize;
    if (size < 1024) {
      curSize = size;
    } else if (1024 < size && size < 1048576) {
      curSize = `${(size / 1024).toFixed(2)}KB`;
    } else if (1048576 < size && 1073747824 > size) {
      curSize = `${(size / (1024 * 1024)).toFixed(2)}MB`;
    } else {
      curSize = `${(size / (1024 * 1024 * 1024)).toFixed(2)}TB`;
    }
    return curSize;
  };

  const downloadHandler = () => {
    RNFetchBlob.config({
      fileCache: true,
      path: url,
      addAndroidDownloads: {
        useDownloadManager: true,
        title,
        mime: 'application/mp3',
        mediaScannable: true,
        notification: true,
      },
    })
      .fetch('GET', url, {'Content-Type': 'octet-stream'}, base64DataString)
      .progress((received, total) => {})
      .then(res => {
        let status = res.info().status;
      })
      .catch((errorMessage, statusCode) => {});
  };

  useEffect(() => {
    getSize();
  }, [url]);

  return (
    <View style={styles.downloadBlock}>
      <Pressable style={styles.downloadBlock} onPress={downloadHandler}>
        {/* <IconIonicons
        name="download-outline"
        style={iconStyles || styles.downloadIcon}
        onPress={downloadHandler}
      /> */}
        {children}
        <Text style={volumeStyles || styles.volume}>{audioSize}</Text>
      </Pressable>
    </View>
  );
};

export default PlayListDownload;
