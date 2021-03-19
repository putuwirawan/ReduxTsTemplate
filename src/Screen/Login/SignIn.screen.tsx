import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import {LogingModel, LoginParam, LoginState} from '../../Redux/Model';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogin, clearLocalStorage, saveLocalStorage } from '../../Global';
import { errorLoging, logIn } from '../../Redux/Actions/Loging.action';
import { RootState } from '../../Redux/Reducers';

type Props = StackScreenProps<LoginParam, 'SignInScreen'>;

export const SignInScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch(); // to Access Action
    const {loginUser, errorLogin, isLogin}: LoginState = useSelector(
        (state: RootState) => state.loging,
      );

    const onlogin = async (username: string, password: string) => {
        const data = await apiLogin(username, password);
    
        if (data.access_token) {
          const userLogin: LogingModel = {
            userId: '1',
            username: data.username,
            token: data.access_token,
            role: data.roles,
          };
          const saveDataToLocal = await saveLocalStorage(userLogin);
    
          if (saveDataToLocal) {
            dispatch(logIn(userLogin));
          } else {
            clearLocalStorage();
          }
        }
        if (data.error_description) {
          dispatch(errorLoging({message: data.error_description}));
        } else {
          if (data.error) {
            dispatch(errorLoging(data.error));
          }
        }
      };

  return (
    <View>
      <View style={styles.button}>
        <Button
          title="go Back"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="login"
          onPress={() => onlogin('wawan','Wiendny_98e')}
        />
        {errorLogin? <Text>{errorLogin.message}</Text>:null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {marginVertical: 5},
});
