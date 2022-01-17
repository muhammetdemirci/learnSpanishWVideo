import React, { ComponentType } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { IWithMarginPaddingProps, withMarginAndPadding } from '../hocs';
import { compose } from 'redux';
import { FONT_STYLES } from '../../../constants/styles/font';
import { useTheme } from '@react-navigation/native';

export interface TextProps
  extends RNTextProps,
    Omit<IWithMarginPaddingProps, 'style'> {
  fontFamily: keyof FontStylesType;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  color?: string;
}

export const Text = compose<ComponentType<TextProps>>(withMarginAndPadding)(
  ({ fontFamily, align, transform, color, style, ...rest }: TextProps) => {
    // theme
    const { colors } = useTheme();

    return (
      <RNText
        style={[
          FONT_STYLES[fontFamily],
          align && { textAlign: align },
          transform && { textTransform: transform },
          { color: color ? color : colors.text },
          style,
        ]}
        {...rest}
      />
    );
  }
);
