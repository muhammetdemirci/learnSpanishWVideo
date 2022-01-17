import React from 'react';
import { Block, BlockProps, IconButton, Text } from '../../../components';
import { CardBase } from './base';
import * as Speech from 'expo-speech';
import { useAppSelector } from '../../../hooks/redux';
import { styles } from './styles';

export interface StudentListenCardProps extends BlockProps {
  onPressRecord: () => void;
}

export function StudentListenCard({
  onPressRecord,
  ...rest
}: StudentListenCardProps) {

  const { example } = useAppSelector(state => state.conversation)

  const onSpeak = () => {
    Speech.speak(example.sentence.se, {
      language: 'se',
    });
  };

  return (
    <CardBase color="#FFFFFF" {...rest} >
      <Block alignEnd>
        <IconButton name={'bookmark'} color="#CBCBCB" margin={[0, 0, 4, 0]} />
      </Block>
      <Block flex margin={[4, 8]} row alignCenter>
        <IconButton
          name={'volume-up'}
          color={'#4F55EA'}
          margin={[0, 4]}
          onPress={onSpeak}
        />
        <Text color="#000000" fontFamily={'medium18'} align="center">
          {example.sentence.se}
        </Text>
      </Block>
      <Text
        color="#000000"
        margin={[4, 0]}
        fontFamily={'regular13'}
        align="center"
      >
        {example.sentence.en}
      </Text>
      <Block margin={20}></Block>
      <Block
        alignCenter
        justifyCenter
        style={styles.studentListenCardMicWrapper}
      >
        <IconButton
          name={'mic'}
          width={60}
          height={60}
          borderRadius={30}
          size={30}
          color="#FFFFFF"
          containerColor="#4F55EA"
          onPress={onPressRecord}
        />
      </Block>
    </CardBase>
  );
}
