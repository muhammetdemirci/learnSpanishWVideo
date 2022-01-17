export interface Conversation {
    index: number
    data: ConversationData
    example: Example
    isDone: boolean
}
export const NEXT_EXAMPLE = "NEXT_EXAMPLE";
export type NEXT_EXAMPLE = typeof NEXT_EXAMPLE;

export const START_CONVERSATION = "START_CONVERSATION";
export type START_CONVERSATION = typeof START_CONVERSATION;
