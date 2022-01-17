import * as types from '../types';

// NextExample
export interface NextExample {
    type: types.conversations.NEXT_EXAMPLE
}
export function nextExample(): NextExample {
    return {
        type: types.conversations.NEXT_EXAMPLE
    }
}

// StartConversation 
export interface StartConversation {
    type: types.conversations.START_CONVERSATION
}
export function startConversation(): StartConversation {
    return {
        type: types.conversations.START_CONVERSATION
    }
}

export type ConversationAction = NextExample | StartConversation