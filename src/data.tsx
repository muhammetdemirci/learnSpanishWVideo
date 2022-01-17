
declare global {
    interface Language {
        en: string;
        se: string;
    }

    interface VideoPart {
        start: number;
        end: number;
    }

    interface Example {
        sentence: Language
        videoPart: VideoPart
        recordDuration: number // ms
    }

    interface ConversationData {
        videoUrl: string;
        examples: Array<Example>
    }
}

export const conversationData: ConversationData = {
    videoUrl: "https://learn-spanish-app.s3.eu-central-1.amazonaws.com/videos/Feedback_Drills_Correct.MOV",
    examples: [
        {
            sentence: {
                en: "Great Job",
                se: "Gran trabajo", // TODO check spanish
            },
            videoPart: {
                start: 7000,
                end: 12000,
            },
            recordDuration: 3000,
        },
        {
            sentence: {
                en: "Excellent",
                se: "Excelente",
            },
            videoPart: {
                start: 12000,
                end: 17500,
            },
            recordDuration: 3000,
        },
        {
            sentence: {
                en: "Amazing",
                se: "Genial",
            },
            videoPart: {
                start: 17500,
                end: 22000,
            },
            recordDuration: 3000,
        },
        {
            sentence: {
                en: "Well Done",
                se: "Bien hecha",
            },
            videoPart: {
                start: 22000,
                end: 27000,
            },
            recordDuration: 3000,
        },
        {
            sentence: {
                en: "I'm impressed",
                se: "Estoy impresionada",
            },
            videoPart: {
                start: 27000,
                end: 33500,
            },
            recordDuration: 4000,
        },
        {
            sentence: {
                en: "You're doing well",
                se: "Lo estás haciendo bien",
            },
            videoPart: {
                start: 33500,
                end: 38000,
            },
            recordDuration: 4000,
        },
    ]
} 