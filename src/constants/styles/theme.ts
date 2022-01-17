import {
  DefaultTheme as RNDefaultTheme,
  DarkTheme as RNDarkTheme,
  ExtendedTheme,
} from '@react-navigation/native';
import '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      card: string;
      notification: string;
      text: string;
      border: string;
      primary: string;
      background: string;
      correct: string;
      wrong: string;
      black: string;
      disabled: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

export const DefaultTheme: ExtendedTheme = {
  ...RNDefaultTheme,
  colors: {
    ...RNDefaultTheme.colors,
    card: '#ffffff',
    text: '#ffffff',
    disabled: 'rgba(1,1,1,0)',
    background: '#ffffff',
    correct: 'rgb(117,219,253)',
    wrong: 'rgb(255,140,140)',
    black: '#000000',
  },
};

export const DarkTheme: ExtendedTheme = {
  ...RNDarkTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};
