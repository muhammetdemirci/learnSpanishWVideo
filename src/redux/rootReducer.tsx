import { combineReducers } from "redux";
import { Conversation } from "./types/conversation";
import { conversation } from "./reducers"

export interface AppState {
    conversation: Conversation;
}
// combine all reducers
export const rootReducer = combineReducers<AppState>({
    conversation,
})