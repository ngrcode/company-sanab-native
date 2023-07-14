import React from 'react';
import {Modal, View} from 'react-native';
import {styles} from './style';
import PdfReader from 'components/PdfReader';
import EpubReader from 'components/EpubReader';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default function PdfModal(props: any) {
  const {showPdf, setShowPdf, fileSrc} = props;
  const extension = fileSrc.split('/').pop().split('.').pop();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showPdf}
        onRequestClose={() => {
          setShowPdf(!showPdf);
        }}>
        <View style={styles.modalView}>
          <IconAnt
            name="closecircleo"
            style={styles.closeIcon}
            onPress={() => setShowPdf(false)}
          />

          {extension === 'pdf' ? (
            <PdfReader pdfUri={fileSrc} />
          ) : (
            <EpubReader epubSrc={fileSrc} />
          )}
        </View>
      </Modal>
    </View>
  );
}
