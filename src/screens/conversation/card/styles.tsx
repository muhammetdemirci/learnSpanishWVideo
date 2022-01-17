import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { layout } from '../../../constants/styles/layout'

interface CardStyle {
    cardBase: StyleProp<ViewStyle>,
    resultCard: StyleProp<ViewStyle>,
    resultCardAnimation: StyleProp<ViewStyle>,
    resultCardImage: StyleProp<ImageStyle>,
    resultCardContinueWrapper: StyleProp<ViewStyle>
    studentCardAnimation: StyleProp<ViewStyle>
    studentCardImage: StyleProp<ImageStyle>,
    studentListenCardMicWrapper: StyleProp<ViewStyle>
}

export const styles: CardStyle = StyleSheet.create({
    cardBase: {
        zIndex: 9999,
    },
    resultCard: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -40,
    },
    resultCardAnimation: {
        width: 160,
        height: 160,
    },
    resultCardImage: {
        position: 'absolute',
        bottom: 0,
        width: layout.window.width,
        height: 450,
    },
    resultCardContinueWrapper: {
        zIndex: 999
    },
    studentCardAnimation: {
        height: 150,
        bottom: 10
    },
    studentCardImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: layout.window.width,
        height: 450,
    },
    studentListenCardMicWrapper : {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -30,
    }
})
