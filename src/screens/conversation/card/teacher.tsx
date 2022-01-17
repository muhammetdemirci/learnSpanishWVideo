import React from 'react';
import { BlockProps, Text } from '../../../components';
import { useAppSelector } from '../../../hooks/redux';
import { CardBase } from './base';

export interface TeacherCardProps extends BlockProps { }

export function TeacherCard({ }: TeacherCardProps) {

  // redux
  const { example } = useAppSelector(state => state.conversation)

  if (!example) return null

  return (
    <CardBase color="#000000">
      <Text margin={[4, 0]} fontFamily={'medium18'} align="center">
        {example.sentence.se}
      </Text>
      <Text margin={[4, 0]} fontFamily={'regular13'} align="center">
        {example.sentence.en}
      </Text>
    </CardBase>
  );
}
