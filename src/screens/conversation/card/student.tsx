import React, { useState } from 'react';
import {
  Block,
  BlockProps,
  Image,
} from '../../../components';
import LottieView from 'lottie-react-native';
import { layout } from '../../../constants/styles/layout';
import { StudentListenCard } from './studentListen';
import { StudentSpeakCard } from './studentSpeak';
import { useAppSelector } from '../../../hooks/redux';
import AnimatedLottieView from 'lottie-react-native';
import { styles } from './styles';

export interface StudentCardProps extends BlockProps {
  onRecordDone: () => void
}

export function StudentCard({ onRecordDone, ...rest }: StudentCardProps) {
  const { example } = useAppSelector(state => state.conversation)

  const [isRecording, setIsRecording] = useState(false);

  let animation: AnimatedLottieView | null;

  async function startRecording() {
    setIsRecording(true);
    setTimeout(() => {
      onRecordDone()
      setIsRecording(false);
    }, example.recordDuration)
  }

  return (
    <Block width={layout.window.width} alignCenter >
      {isRecording ? (
        <StudentSpeakCard minHeight={150} />
      ) : (
        <StudentListenCard minHeight={150} onPressRecord={startRecording} />
      )}
      <Block height={150} alignCenter justifyCenter >
        {isRecording && (
          <LottieView
            ref={(animationRef) => (animation = animationRef)}
            style={styles.studentCardAnimation}
            autoPlay
            source={require('../../../assets/animations/sound-waves.json')}
          />
        )}
      </Block>
      {isRecording && (
        <Image
          style={styles.studentCardImage}
          source={require('../../../assets/images/lg-speak.png')}
        />
      )}
    </Block>
  );
}
