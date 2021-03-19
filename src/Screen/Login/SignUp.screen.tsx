import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import {LoginParam} from '../../Redux/Model';

type Props = StackScreenProps<LoginParam, 'SignUpScreen'>;

export const SignUpScreen: FC<Props> = ({navigation}) => {
  return (
    <View>
      <View style={styles.button}>
        <Button
          title="go Back"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {marginVertical: 5},
});
