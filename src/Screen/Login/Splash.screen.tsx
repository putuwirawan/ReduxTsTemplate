import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {LoginParam, ThemeState} from '../../Redux/Model';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Redux/Reducers';
import {thougleTheme} from '../../Redux/Actions/Theme.action';
import {Button as BtNew} from '../../Componet';
import {Styles} from '../../Global';
import {color} from 'react-native-reanimated';

type Props = StackScreenProps<LoginParam, 'SplashScreen'>;

export const SplashScreen: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch(); // to Access Action
  const logo = require('../../Assets/Images/logo.png');
  const title = 'Planet Surf';
  const {width} = Dimensions.get('screen');
  
  const {isDarkTheme}: ThemeState = useSelector(
    (state: RootState) => state.theme,
  );

  const onToggle = async () => {
    // await clearLocalStorage();
    dispatch(thougleTheme(!isDarkTheme));
  };
  return (
    <View style={[Styles.Container,Styles.bottomSection, {backgroundColor:'blue'}]}>
      {/* <View style={styles.button}>
        <Button
          title="Go to SignIn Screen"
          onPress={() => navigation.navigate('SignInScreen')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to SignUp Screen"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </View> */}
      {/* <View style={styles.button}>
        <Button title="darktheme" onPress={() => onToggle()} />
      </View>
      <BtNew
        title="SUSUS"
        width={150}
        textStyle={[Styles.SubTitle]}
        radius={40}
        color={['#7CA350', '#5086A3']}
      /> */}
      <View style={{ flex:2}}>
        <Text>Koppppi</Text>
        <Text>Koppppddi</Text>
      </View>
      <View
        style={[{flex:3, backgroundColor:'red', borderTopLeftRadius:width/2, }]}>
        <Text style={[Styles.Price, Styles.StrikeText, {color: 'yellow'}]}>
          KOPI
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {marginVertical: 5},
});
