import { StyleProp, StyleSheet, TextStyle } from "react-native";

interface HighlightTextStyle {
    text: StyleProp<TextStyle>
}

export const styles: HighlightTextStyle = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    }
})