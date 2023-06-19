import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

function Counter({setCounterNum, counterNum}: any) {
  useEffect(() => {
    let count = 6000;
    let oneSecInterval = setInterval(() => {
      count = count - 1000;
      setCounterNum(count);
      if (count === 0) {
        clearInterval(oneSecInterval);
      }
    }, 1000);
  }, []);

  const toSecondMinuteFormat = (num: any) => {
    return new Date(num).toISOString().slice(14, 19);
  };

  return (
    <View>
      <Text style={styles.time}> {toSecondMinuteFormat(counterNum)}</Text>
    </View>
  );
}
export default Counter;
