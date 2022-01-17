/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ConversationScreen } from '../screens/conversation/ConversationScreen';
import { LessonScreen } from '../screens/lesson/LessonScreen';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<UserStackParamList>();

export function UserStackNavigator() {
  return (
    <React.Fragment>
      <Stack.Navigator
        initialRouteName={'Lesson'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Conversation'} component={ConversationScreen} />
        <Stack.Screen name={'Lesson'} component={LessonScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
}
