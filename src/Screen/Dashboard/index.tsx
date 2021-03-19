import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import your screen here.......
import {Page1Screen} from './Page1/Page1.screen';

export const DashboardStackScreen: FC = () => {
  const DashboardStack = createStackNavigator();
  return (
    <DashboardStack.Navigator
      initialRouteName="Page1"
      screenOptions={{headerShown: true}}>
      <DashboardStack.Screen name="Page1" component={Page1Screen} />
    </DashboardStack.Navigator>
  );
};
