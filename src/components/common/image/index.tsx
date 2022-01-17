import React, { ComponentType } from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';
import {
  IWithMarginPaddingProps,
  withMarginAndPadding,
  withStyle,
  IWithStyleProps,
} from '../hocs';
import { compose } from 'redux';

export interface ImageProps
  extends RNImageProps,
    Omit<IWithStyleProps, 'style' | 'borderRadius' | 'height' | 'width'>,
    Omit<IWithMarginPaddingProps, 'style'> {}

export const Image = compose<ComponentType<ImageProps>>(
  withMarginAndPadding,
  withStyle
)((props: ImageProps) => {
  return <RNImage {...props} />;
});
