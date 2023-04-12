export default defineEventHandler((event) => {
    const context = event.context;
    const typeOfWaitUntil = typeof (context as any)?.cloudflare?.context?.waitUntil;
    const requestStr = JSON.stringify((context as any)?.cloudflare?.request);
    return { context, typeOfWaitUntil, requestStr };
});