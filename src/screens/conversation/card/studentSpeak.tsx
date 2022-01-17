import React from 'react';
import {
  Block,
  BlockProps,
  IconButton,
  Text,
  HighlightText
} from '../../../components';
import { useAppSelector } from '../../../hooks/redux';
import { CardBase } from './base';

export interface StudentSpeakCardProps extends BlockProps { }

export function StudentSpeakCard({ ...rest }: StudentSpeakCardProps) {

  // redux
  const { example } = useAppSelector(state => state.conversation)

  return (
    <CardBase color="#FFFFFF" {...rest}>
      <Block alignEnd style={{ position: 'absolute', top: 8, right: 8 }}>
        <IconButton name={'bookmark'} color="#CBCBCB" margin={[0, 0, 4, 0]} />
      </Block>
      <Block margin={[8, 0]} alignCenter>
        <Text color="rgb(125,125,125)" fontFamily={'medium13'} align="center">
          Speak now
        </Text>
      </Block>
      <Block margin={[8, 0]} alignCenter>
        <HighlightText
          highlightStyle={{ color: '#2E35D6' }}
          searchWords={[]} // TODO
          textToHighlight={example.sentence.se}
        />
      </Block>
      <Block margin={20}></Block>
    </CardBase>
  );
}
