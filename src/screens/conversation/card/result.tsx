import React, { Fragment } from 'react';
import {
  Block,
  BlockProps,
  ButtonContainer,
  IconButton,
  Text,
  Image,
} from '../../../components';
import { CardBase } from './base';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import { useAppSelector } from '../../../hooks/redux';

export interface ResultCardProps extends BlockProps {
  onPressContinue: () => void;
}

export function ResultCard({ onPressContinue, ...rest }: ResultCardProps) {

  // redux
  const { example } = useAppSelector(state => state.conversation)

  return (
    <Fragment>
      <CardBase color="#FFFFFF" {...rest}>
        <Block
          alignCenter
          justifyCenter
          style={styles.resultCard}
        >
          <Block
            width={80}
            height={80}
            color="#FFF"
            alignCenter
            justifyCenter
            borderRadius={40}
          >
            <LottieView
              style={styles.resultCardAnimation}
              autoPlay
              loop={false}
              source={require('../../../assets/animations/success-confetti.json')}
            />
          </Block>
        </Block>
        <Block alignEnd>
          <IconButton name={'bookmark'} color="#CBCBCB" margin={[0, 0, 4, 0]} />
        </Block>
        <Block alignCenter>
          <Block margin={[16, 0, 8, 0]}>
            <Text color="#05AA1F" fontFamily={'medium18'} align="center">
              Well Done
            </Text>
          </Block>
          <Block
            margin={[8, 0]}
            padding={[4, 8]}
            borderRadius={8}
            color="rgba(5,179,31,0.1)"
          >
            <Text color="#05AA1F" fontFamily={'regular16'} align="center">
              {example.sentence.se}
            </Text>
          </Block>
        </Block>
      </CardBase>
      <Block height={120} alignCenter justifyCenter style={styles.resultCardContinueWrapper}>
        <ButtonContainer text={'CONTINUE'} onPress={onPressContinue} />
      </Block>
      <Image
        style={styles.resultCardImage}
        source={require('../../../assets/images/lg-success.png')}
      />
    </Fragment>
  );
}
