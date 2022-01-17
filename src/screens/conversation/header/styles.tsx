import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface HeaderStyle {
    root: StyleProp<ViewStyle>,
}

export const styles: HeaderStyle = StyleSheet.create({
    root: {
        zIndex: 999999999
    }
})
