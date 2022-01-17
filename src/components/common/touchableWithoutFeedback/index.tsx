import React, { ComponentType } from 'react';
import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native';
import {
  IWithMarginPaddingProps,
  withMarginAndPadding,
  withStyle,
  withStyleProps,
} from '../hocs';
import { compose } from 'redux';

export interface TouchableWithoutFeedbackProps
  extends RNTouchableWithoutFeedbackProps,
  withStyleProps,
  Omit<IWithMarginPaddingProps, 'style'> { }

export const TouchableWithoutFeedback = compose<
  ComponentType<TouchableWithoutFeedbackProps>
>(
  withMarginAndPadding,
  withStyle
)((props: TouchableWithoutFeedbackProps) => {
  return <RNTouchableWithoutFeedback {...props} />;
});
