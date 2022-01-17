declare global {
  interface FontStyle {
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
  }

  interface FontStylesType {
    medium18: FontStyleType;
    medium13: FontStyleType;
    regular16: FontStyleType;
    regular13: FontStyleType;
  }
}

type FontFamilyType =
  | 'Roboto-Black'
  | 'Roboto-BlackItalic'
  | 'Roboto-Bold'
  | 'Roboto-BoldItalic'
  | 'Roboto-Italic'
  | 'Roboto-Light'
  | 'Roboto-LightItalic'
  | 'Roboto-Medium'
  | 'Roboto-MediumItalic'
  | 'Roboto-Regular'
  | 'Roboto-Thin'
  | 'Roboto-ThinItalic';

interface FontStyleType {
  fontFamily: FontFamilyType;
  fontSize: number;
  lineHeight?: number;
}

export const FONT_STYLES: FontStylesType = {
  medium18: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  medium13: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
  },
  regular16: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  regular13: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
};
