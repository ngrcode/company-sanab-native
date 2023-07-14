import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  RefreshControl,
} from 'react-native';
import Button from 'components/Button';
import {styles} from './style';
import {logout} from 'stores/slices/common.slices';
import {useDispatch, useSelector} from 'react-redux';
import {profileInfo2, profileInfo} from 'utils/profile.utils';
import {RootState} from 'stores/store';
import ProfileModal from './ProfileModal';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  useAuthMutation,
  usePostConfirmCodeMutation,
} from 'services/auth.service';
import {handleAuth} from 'stores/slices/common.slices';

function Item(props: any) {
  const {title, desc, id, onPress} = props;

  return (
    <Pressable key={id} style={styles.item} onPress={onPress}>
      <View style={styles.descWrapper}>
        <Icon name="angle-left" style={styles.icon} />
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const selector = useSelector((state: RootState) => state.common);
  const currentUser = selector?.curUser;
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [postConfirmCode, {isLoading: isLoadingConfirmCode}] =
    usePostConfirmCodeMutation('post');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    postConfirmCode({
      code: selector?.loginCode?.code,
      id: selector?.curUser?.id,
    }).then((res: any) => {
      const response = res?.data;
      const user = response?.user;
      const accessToken = response?.accessToken;
      const refreshToken = response?.refreshToken;
      setRefreshing(false);
      dispatch(
        handleAuth({
          token: accessToken,
          refreshToken,
          user,
          loginCode: selector?.loginCode?.code,
        }),
      );
    });
  }, []);

  const handleLogout = () => {
    dispatch(logout(''));
    navigation.navigate('home');
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <Image source={require('assets/images/profile-man.png')} />
        <View style={styles.itemWrapper}>
          <Text style={styles.info}>اطلاعات حساب کاربری</Text>
          {profileInfo(currentUser).map((item: any) => {
            return (
              <Item
                key={item.id}
                {...item}
                onPress={() => {
                  item.onPress(setModalVisible, setInput);
                }}
              />
            );
          })}
        </View>
        <View style={styles.itemWrapper}>
          {profileInfo2.map((item: any) => {
            const {id, navigatePath} = item;
            return (
              <Item
                {...item}
                key={id}
                onPress={() => navigation.navigate(navigatePath)}
              />
            );
          })}
        </View>
        <Button
          title="خروج از حساب کاربری"
          btnType="redColor"
          marginTop={16}
          padding={16}
          onPress={handleLogout}
        />
      </View>
      <ProfileModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        input={input}
      />
    </ScrollView>
  );
};

export default Profile;
