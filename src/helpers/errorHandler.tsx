export function makeHandlerAwareOfAsyncErrors(handler: Function, errorName?: string) {
    return async function () {
        try {
            await handler();
        } catch (error) {
            console.error(`ERROR :: ${errorName}`, error);
        }
    };
}