import React, { ComponentType } from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import {
  IWithMarginPaddingProps,
  withMarginAndPadding,
  withStyle,
  withStyleProps,
} from '../hocs';
import { compose } from 'redux';

export interface TouchableOpacityProps
  extends RNTouchableOpacityProps,
    withStyleProps,
    Omit<IWithMarginPaddingProps, 'style'> {}

export const TouchableOpacity = compose<ComponentType<TouchableOpacityProps>>(
  withMarginAndPadding,
  withStyle
)((props: TouchableOpacityProps) => {
  return <RNTouchableOpacity {...props} />;
});
