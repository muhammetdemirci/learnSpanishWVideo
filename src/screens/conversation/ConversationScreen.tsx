import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AVPlaybackStatusToSet, Video, Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { Block, Loading } from '../../components';
import { ConversationHeader } from './header';
import { TeacherCard } from './card/teacher';
import { StudentCard } from './card/student';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as reduxActions from '../../redux/actions';
import { ResultCard } from './card/result';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { resultAnimationConfig, studentAnimationConfig, styles, teacherAnimationConfig } from './styles';
import { BottomPositionAnimation, TopPositionAnimation } from '../../types';
import { makeHandlerAwareOfAsyncErrors } from '../../helpers/errorHandler';

export interface ConversationScreenProps { }

export function ConversationScreen({ }: ConversationScreenProps) {
  // navigation
  const navigation = useNavigation();
  // redux
  const {
    index,
    data,
    example,
    isDone
  } = useAppSelector(state => state.conversation);
  const dispatch = useAppDispatch();

  const [isVideoLoad, setIsVideoLoad] = useState<Boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // sounds
  const [soundSuccess, setSoundSuccess] = useState<Sound>();


  // animations
  const teacherAnimation = useSharedValue<TopPositionAnimation>({ top: teacherAnimationConfig.close.top })
  const teacherAnimationStyles = useAnimatedStyle(() => {
    return {
      top: withTiming(teacherAnimation.value.top, {
        duration: teacherAnimationConfig.duration
      })
    };
  });

  const studentAnimation = useSharedValue<BottomPositionAnimation>({ bottom: studentAnimationConfig.close.bottom })
  const studentAnimationStyles = useAnimatedStyle(() => {
    return {
      bottom: withTiming(studentAnimation.value.bottom, {
        duration: studentAnimationConfig.duration
      })
    };
  });

  const resultAnimation = useSharedValue<BottomPositionAnimation>({ bottom: resultAnimationConfig.close.bottom })
  const resultAnimationStyles = useAnimatedStyle(() => {
    return {
      bottom: withTiming(resultAnimation.value.bottom, {
        duration: resultAnimationConfig.duration
      })
    };
  });

  let video = useRef<Video>(null);

  useEffect(() => {
    loadSounds()
  }, [])

  useEffect(() => {
    if (isVideoLoad)
      playVideo()
  }, [isVideoLoad, index])

  useEffect(() => {
    if (isDone) navigation.goBack()
  }, [isDone])

  const onPlaybackStatusUpdate = (status: AVPlaybackStatusToSet) => {
    if (example && status && status.positionMillis) {
      if (status.positionMillis >= example.videoPart.start) {
        teacherAnimation.value = teacherAnimationConfig.open
      }
      if (status.positionMillis >= example.videoPart.end) {
        teacherAnimation.value = teacherAnimationConfig.close
        studentAnimation.value = studentAnimationConfig.open
        pauseVideo()
      }
    }
  }

  const playVideo = makeHandlerAwareOfAsyncErrors(async () => {
    if (isVideoPlaying) return
    setIsVideoPlaying(true);
    await video.current?.playAsync()
  }, "playVideo")

  const pauseVideo = makeHandlerAwareOfAsyncErrors(async () => {
    if (!isVideoPlaying) return
    setIsVideoPlaying(false);
    await video.current?.pauseAsync()
  }, "pauseVideo")

  const onRecordDone = async () => {
    studentAnimation.value = studentAnimationConfig.close
    resultAnimation.value = resultAnimationConfig.open
    onSuccessExample()
  }

  const onPressContinue = () => {
    resultAnimation.value = resultAnimationConfig.close
    dispatch(reduxActions.conversations.nextExample())
  }

  const onSuccessExample = makeHandlerAwareOfAsyncErrors(async () => {
    if (soundSuccess) {
      soundSuccess.setPositionAsync(0)
      await soundSuccess.playAsync();
    }
  }, "onSuccessExample")

  const loadSounds = makeHandlerAwareOfAsyncErrors(async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/correct.mp3')
    );
    setSoundSuccess(sound);
    if (soundSuccess)
      soundSuccess.setPositionAsync(0)
  }, "loadSounds")

  return (
    <Fragment>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: data.videoUrl,
        }}
        resizeMode="cover"
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        onReadyForDisplay={() => setIsVideoLoad(true)}
      />
      <Block flex>
        <ConversationHeader />
        {
          !isVideoLoad && <Loading />
        }
        <Block
          style={styles.content}
        >
          <Animated.View
            key={"teacherAnimation"}
            style={[styles.animatedView, teacherAnimationStyles]}
          >
            <TeacherCard />
          </Animated.View>
          <Animated.View
            key={"studentAnimation"}
            style={[styles.animatedView, studentAnimationStyles]}
          >
            <StudentCard
              onRecordDone={onRecordDone}
            />
          </Animated.View>
          <Animated.View
            key={"resultAnimation"}
            style={[styles.animatedView, resultAnimationStyles]} >
            <ResultCard
              onPressContinue={onPressContinue} />
          </Animated.View>
        </Block>
      </Block>
    </Fragment>
  );
}
