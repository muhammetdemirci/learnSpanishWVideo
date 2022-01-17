import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity, TouchableOpacityProps } from '../common';

export interface IconButtonProps extends TouchableOpacityProps {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color?: string;
  size?: number;
  containerColor?: string;
}

export function IconButton({
  name,
  color,
  size = 20,
  margin = 8,
  containerColor,
  ...rest
}: IconButtonProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      margin={margin}
      alignCenter
      justifyCenter
      color={containerColor}
      {...rest}
    >
      <MaterialIcons name={name} color={color || colors.black} size={size} />
    </TouchableOpacity>
  );
}
