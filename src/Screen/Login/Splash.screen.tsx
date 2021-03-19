import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import {LoginParam, ThemeState} from '../../Redux/Model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Reducers';
import { thougleTheme } from '../../Redux/Actions/Theme.action';


type Props = StackScreenProps<LoginParam, 'SplashScreen'>;

export const SplashScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch(); // to Access Action
    const logo = require('../../Assets/Images/logo.png');
    const title = 'Planet Surf';

    const {isDarkTheme}: ThemeState = useSelector(
        (state: RootState) => state.theme,
      );

    const onToggle = async () => {
        // await clearLocalStorage();
        dispatch(thougleTheme(!isDarkTheme));
      };
  return (
    <View>
      <View style={styles.button}>
        <Button title="Go to SignIn Screen" onPress={() => navigation.navigate('SignInScreen')} />
      </View>
      <View style={styles.button}>
        <Button title="Go to SignUp Screen" onPress={() => navigation.navigate('SignUpScreen')} />
      </View>
      <View style={styles.button}>
        <Button
          title="darktheme"
          onPress={() => onToggle()}
        />
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  button: {marginVertical: 5},
});
