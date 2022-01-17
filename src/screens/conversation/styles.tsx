import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { layout } from '../../constants/styles/layout'
import { BottomPositionAnimationConfig, TopPositionAnimationConfig } from "../../types"

interface ConversationStyle {
    video: StyleProp<ViewStyle>,
    content: StyleProp<ViewStyle>,
    animatedView: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>
}

export const styles: ConversationStyle = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: layout.window.width,
        height: layout.window.height,
        zIndex: -1
    },
    content: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: layout.window.width,
        height: layout.window.height,
        zIndex: 999999,
        justifyContent: "center",
        alignItems: "center"
    },
    animatedView: {
        position: "absolute", left: 0, right: 0, alignItems: "center"
    }
})

export const teacherAnimationConfig: TopPositionAnimationConfig = {
    open: {
        top: 80,
    },
    close: {
        top: -200
    },
    duration: 280
}

export const studentAnimationConfig: BottomPositionAnimationConfig = {
    open: {
        bottom: 0,
    },
    close: {
        bottom: -400,
    },
    duration: 400
}

export const resultAnimationConfig: BottomPositionAnimationConfig = {
    open: {
        bottom: 0,
    },
    close: {
        bottom: -400
    },
    duration: 400
}