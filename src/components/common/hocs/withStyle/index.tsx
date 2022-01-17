import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { styles, BORDER_WIDTH, BORDER_RADIUS } from './styles';

export interface withStyleProps {
  flex?: boolean | number;
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  justifyCenter?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  between?: boolean;
  around?: boolean;

  width?: number | string;
  minWidth?: number | string;

  height?: number | string;
  minHeight?: number | string;

  borderRadius?: boolean | number;
  borderWidth?: boolean | number;
  borderColor?: boolean | string;

  borderTopWidth?: boolean | number;
  borderTopColor?: boolean | string;

  borderBottomWidth?: boolean | number;
  borderBottomColor?: boolean | string;

  borderLeftWidth?: boolean | number;
  borderLeftColor?: boolean | string;

  borderRightWidth?: boolean | number;
  borderRightColor?: boolean | string;

  color?: string;
  style?: StyleProp<ViewStyle>;
}

export type IWithStyleProps = withStyleProps;
export type HocWithStyleProps<T> = Omit<T, keyof IWithStyleProps>;

export function withStyle<T extends withStyleProps>(
  Component: React.ComponentType<HocWithStyleProps<T>>
) {
  return ({
    flex,
    row,
    column,
    alignCenter,
    alignStart,
    alignEnd,
    justifyCenter,
    justifyStart,
    justifyEnd,
    between,
    around,

    width,
    minWidth,
    height,
    minHeight,

    borderRadius,
    borderWidth,
    borderColor,

    borderTopWidth,
    borderTopColor,

    borderBottomWidth,
    borderBottomColor,

    borderLeftWidth,
    borderLeftColor,

    borderRightWidth,
    borderRightColor,

    color,
    style,
    ...rest
  }: T) => {
    // theme
    const { colors } = useTheme();

    return (
      <Component
        style={[
          flex && (typeof flex === typeof true ? styles.flex : { flex }),
          row && styles.row,
          column && styles.column,
          alignCenter && styles.alignCenter,
          alignStart && styles.alignStart,
          alignEnd && styles.alignEnd,
          justifyCenter && styles.justifyCenter,
          justifyStart && styles.justifyStart,
          justifyEnd && styles.justifyEnd,
          between && styles.between,
          around && styles.around,

          width && { width },
          minWidth && { minWidth },

          height && { height },
          minHeight && { minHeight },

          borderRadius &&
            (typeof borderRadius === typeof 2
              ? { borderRadius }
              : {
                  borderRadius: BORDER_RADIUS,
                }),
          borderWidth &&
            (typeof borderRadius === typeof 2
              ? { borderWidth }
              : {
                  borderWidth: BORDER_WIDTH,
                }),
          borderColor &&
            (typeof borderColor === typeof ''
              ? { borderColor }
              : { borderColor: colors.border }),

          borderTopWidth &&
            (typeof borderTopWidth === typeof 2
              ? { borderTopWidth }
              : {
                  borderTopWidth: BORDER_WIDTH,
                }),
          borderTopColor &&
            (typeof borderTopColor === typeof ''
              ? { borderTopColor }
              : {
                  borderTopColor: colors.border,
                }),

          borderBottomWidth &&
            (typeof borderBottomWidth === typeof 2
              ? { borderBottomWidth }
              : {
                  borderBottomWidth: BORDER_WIDTH,
                }),
          borderBottomColor &&
            (typeof borderBottomColor === typeof ''
              ? { borderBottomColor }
              : {
                  borderBottomColor: colors.border,
                }),
          borderLeftWidth &&
            (typeof borderLeftWidth === typeof 2
              ? { borderLeftWidth }
              : {
                  borderLeftWidth: BORDER_WIDTH,
                }),
          borderLeftColor &&
            (typeof borderLeftColor === typeof ''
              ? { borderLeftColor }
              : {
                  borderLeftColor: colors.border,
                }),

          borderRightWidth &&
            (typeof borderRightWidth === typeof 2
              ? { borderRightWidth }
              : {
                  borderRightWidth: BORDER_WIDTH,
                }),
          borderRightColor &&
            (typeof borderRightColor === typeof ''
              ? { borderRightColor }
              : {
                  borderRightColor: colors.border,
                }),

          color && { backgroundColor: color },
          style,
        ]}
        {...rest}
      />
    );
  };
}
