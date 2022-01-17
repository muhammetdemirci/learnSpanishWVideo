import React from 'react';
import { Block, BlockProps } from '../../../components';
import { useAppSelector } from '../../../hooks/redux';

export interface ProgressBarProps { }

export function ProgressBar({ }: ProgressBarProps) {
  // redux
  const { index, data } = useAppSelector(state => state.conversation)

  const leftCount = data.examples.length - index

  return (
    <BarItem flex row>
      <BarItem flex={index} color="#40CC1D" />
      <BarItem flex={leftCount} />
    </BarItem>
  );
}

interface BarItemProps extends BlockProps { }
function BarItem({ color = '#707070', ...rest }: BarItemProps) {
  return <Block color={color} height={6} borderRadius={6} {...rest} />;
}
