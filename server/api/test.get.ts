export default defineEventHandler(async (event) => {
    const context = event.context;
    const typeOfWaitUntil = typeof (context as any)?.cloudflare?.context?.waitUntil;
    const requestStr = JSON.stringify((context as any)?.cloudflare?.request);
    const myConst = (await import('../../myConst')).myConst;
    return { context, typeOfWaitUntil, requestStr, myConst };
});