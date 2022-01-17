import { Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, Easing, withTiming } from 'react-native-reanimated';

export function Box() {
    const offset = useSharedValue(-100);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: offset.value }],
        };
    });

    const onPress = () => {
        if (offset.value === -100) {
            offset.value = withTiming(100, {
                duration: 100,
                easing: Easing.out(Easing.exp),
            });
        }
        else {
            offset.value = withTiming(-100, {
                duration: 100,
                easing: Easing.out(Easing.exp),
            });
        }
    }

    return (
        <>
            <Animated.View style={[{ width: 50, height: 50, backgroundColor: 'red' }, animatedStyles]} />
            <Button onPress={() => onPress()} title="Move" />
        </>
    );
}