import React from 'react';
import { Block, IconButton } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from './progress';
import { styles } from './styles';

export interface ConversationHeaderProps { }

export function ConversationHeader({ }: ConversationHeaderProps) {

  const navigation = useNavigation();

  return (
    <Block row margin={[36, 8]} alignCenter
      style={styles.root}
    >
      <IconButton name={'close'}
        onPress={() => navigation.goBack()}
      />
      <ProgressBar />
      <IconButton name={'more-horiz'} />
    </Block>
  );
}
