import {
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

export const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
    primary: '#4c966d',
    border: '#DBE4E2',
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
    primary: '#5da07b',
    border: '#696E6C',
  },
};
