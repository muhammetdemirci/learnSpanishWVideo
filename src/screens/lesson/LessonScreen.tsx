import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Block, ButtonContainer } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as reduxActions from '../../redux/actions';

export interface LessonScreenProps {

}

export function LessonScreen({ }: LessonScreenProps) {

    // navigation
    const navigation = useNavigation()

    // redux
    const dispatch = useAppDispatch()
    const {
        isDone
    } = useAppSelector(state => state.conversation)

    const onStart = () => {
        dispatch(reduxActions.conversations.startConversation())
        navigation.navigate("Conversation")
    }

    return (<Block flex alignCenter justifyCenter >
        <ButtonContainer text={isDone ? 'Play again' : 'Play'} onPress={onStart} />
    </Block>)
}