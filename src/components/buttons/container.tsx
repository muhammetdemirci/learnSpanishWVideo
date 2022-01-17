import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from '../common';
import { layout } from '../../constants/styles/layout';

export interface ButtonContainerProps extends TouchableOpacityProps {
  text: string;
}

export function ButtonContainer({
  disabled,
  text,
  ...rest
}: ButtonContainerProps) {
  // theme
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      color={'#1E1F27'}
      disabled={disabled}
      margin={8}
      padding={[8, 24]}
      borderRadius={24}
      alignCenter
      justifyCenter
      {...rest}
    >
      <Text fontFamily={'medium18'} color={'#FFFFFF'}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
