import {StyleSheet} from 'react-native';
import {theme} from 'shared/theme';

export const funcStyles = (isCurSpeed: any) =>
  StyleSheet.create({
    speedNum: {
      borderStyle: 'solid',
      borderColor: isCurSpeed ? theme.colors.blue[0] : theme.colors.gray[3],
      color: isCurSpeed ? theme.colors.blue[0] : theme.colors.gray[3],
      borderWidth: 1,
      borderRadius: 10,
      padding: 8,
    },
  });
export const styles = StyleSheet.create({
  iconClock: {
    fontSize: 20,
  },
  iconDownload: {
    fontSize: 22,
  },
  iconBlock: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 19,
    color: theme.colors.gray[5],
    marginTop: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  sliderBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  speedsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 56,
    borderBottomColor: theme.colors.gray[2],
    borderStyle: 'solid',
    borderBottomWidth: 1.5,
    paddingBottom: 16,
  },

  actBtnBlock: {
    flexDirection: 'row',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  confirm: {
    color: theme.colors.blue[0],
    fontSize: 16,
    borderRightStyle: 'solid',
    borderRightColor: theme.colors.gray[2],
    borderRightWidth: 1,
    width: '50%',
    textAlign: 'center',
  },
  cancel: {
    color: theme.colors.singletons.black,
    fontSize: 16,
    width: '50%',
    textAlign: 'center',
  },
  speed: {
    color: theme.colors.singletons.black,
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 8,
    paddingBottom: 42,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  title: {
    color: theme.colors.singletons.black,
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 8,
    paddingBottom: 16,
    borderStyle: 'solid',
    borderColor: theme.colors.gray[2],
    borderBottomWidth: 1,
    width: '70%',
    textAlign: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
