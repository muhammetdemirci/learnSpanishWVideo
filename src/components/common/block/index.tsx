import React, { ComponentType } from 'react';
import { View, ViewProps } from 'react-native';
import {
  IWithMarginPaddingProps,
  withMarginAndPadding,
  withStyle,
  withStyleProps,
} from '../hocs';
import { compose } from 'redux';

export interface BlockProps
  extends ViewProps,
    withStyleProps,
    Omit<IWithMarginPaddingProps, 'style'> {}

export const Block = compose<ComponentType<BlockProps>>(
  withMarginAndPadding,
  withStyle
)((props: BlockProps) => {
  return <View {...props} />;
});
