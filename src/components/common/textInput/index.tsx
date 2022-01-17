import React, { ComponentType } from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { IWithMarginPaddingProps, withMarginAndPadding } from '../hocs';
import { compose } from 'redux';

export interface TextInputProps
  extends RNTextInputProps,
    Omit<IWithMarginPaddingProps, 'style'> {}

export const TextInput = compose<ComponentType<TextInputProps>>(
  withMarginAndPadding
)((props: TextInputProps) => {
  return <RNTextInput {...props} />;
});
