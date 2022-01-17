import React from 'react';
import { Block, BlockProps } from '../../../components';
import { layout } from '../../../constants/styles/layout';
import { styles } from './styles';

export interface CardBaseProps extends BlockProps { }

export function CardBase({ color = '#FFFFFF', ...rest }: CardBaseProps) {
  return (
    <Block
      color={color}
      borderRadius={12}
      padding={16}
      margin={8}
      width={layout.window.width * 0.9}
      style={styles.cardBase}
      {...rest}
    />
  );
}
