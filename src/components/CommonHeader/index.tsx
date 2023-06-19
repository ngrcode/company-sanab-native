import {View, Text} from 'react-native';
import {styles} from './style';

function CommonHeader(props: any) {
  const {options, route, ...rest} = props;
  return (
    <View style={[styles.container, {...rest}]}>
      <Text style={styles.text}>{options?.title}</Text>
    </View>
  );
}

export default CommonHeader;
