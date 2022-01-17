import { conversationData } from "../../data";
import { ConversationAction } from "../actions/conversation";
import { Conversation, NEXT_EXAMPLE, START_CONVERSATION } from "../types/conversation";


const initialState: Conversation = {
    index: 0,
    data: conversationData,
    example: conversationData.examples[0],
    isDone: false,
}

export function conversation(state: Conversation = initialState, action: ConversationAction): Conversation {
    switch (action.type) {
        case NEXT_EXAMPLE:
            if (state.data.examples.length > state.index + 1)
                return {
                    ...state,
                    index: state.index + 1,
                    example: state.data.examples[state.index + 1]
                }
            else
                return {
                    ...state,
                    isDone: true
                }
        case START_CONVERSATION:
            return initialState
        default:
            return state;
    }
}